import React, { useEffect, useState } from "react";
import './schema-generation.scss';
import { prettyJson, rawJson } from "./utils";

const SchemaGeneration = () => {

  const [inputJson, setInputJson] = useState(prettyJson(rawJson));
  const [fudgedJson, setFudgedJson] = useState({});
  const [usingKey, setUsingKey] = useState('');
  const [addingKey, setAddingKey] = useState('');
  const [delimiter, setDelimiter] = useState('');
  const [segments, setSegments] = useState([]);
  const [segmentToUse, setSegmentToUse] = useState(0);
  const segmentsToDisplay = segments.map((s, i) =>
    <div className="preview-segment-display" onClick={() => setSegmentToUse(i)}>{s}</div>)

  const valueTypes = ['Whole Value', 'Substring', 'Array Element'];
  const [valueType, setValueType] = useState(valueTypes[0]);
  const valueTypeIsWhole = valueType === valueTypes[0];
  const valueTypeIsSubstring = valueType === valueTypes[1];
  const valueTypeIsArray = valueType === valueTypes[2];
  const options = valueTypes.map(valueType =>
    <option value={valueType}>{valueType}</option>)

  const [schema, setSchema] = useState({});

  useEffect(() => {
    switch (valueType) {
      case 'Substring':
        if (delimiter && usingKey) setSegments(() => rawJson[usingKey].split(delimiter));
        else if (usingKey) setSegments(() => [rawJson[usingKey]]);
        else setSegments(() => []);
        break;
      case 'Array Element':
        if (usingKey) setSegments(() => [...rawJson[usingKey]]);
        else setSegments(() => []);
        break;
      default:
        setSegments(() => []);
    }
  }, [valueType, delimiter, usingKey]);


  const getPreviewValue = () => {
    let newValue;

    if (valueTypeIsWhole || !delimiter) newValue = rawJson[usingKey];
    if (delimiter && valueTypeIsSubstring) newValue = segments[segmentToUse] || 'select a valid segment';
    if (valueTypeIsArray) newValue = segments[segmentToUse];

    return newValue;
  }
  const previewValue = getPreviewValue();

  const preview = {
    [addingKey]: previewValue
  }

  const addKey = () => {
    setFudgedJson(prev => {
      return {
        ...prev,
        [addingKey]: previewValue,
      }
    });

    updateSchema();

    setValueType('Whole Value');
    setDelimiter('');
    setSegmentToUse(0);
    setAddingKey('');
    setUsingKey('');
  }

  const updateSchema = () => {
    let path;

    switch (valueType) {
      case 'Whole Value':
        path = `o.${usingKey}`;
        break;
      case 'Substring':
        path = delimiter
          ? `o.${usingKey}.split('${delimiter}')[${segmentToUse}]`
          : `o.${usingKey}`;
        break;
      case 'Array Element':
        path = `o.${usingKey}[${segmentToUse}]`;
        break;
      default:
        path = `o.${usingKey}`;
    }

    setSchema(prev => {
      return {
        ...prev,
        [addingKey]: path,
      }
    })
  }



  return (
    <div className="json-fudger">

      <div className="raw-json-container json-container">
        <label>
          Raw JSON:
          <textarea className="raw-json json"
                    onChange={(e) => setInputJson(e.target.value)}
          >
          {inputJson}
        </textarea>
        </label>
      </div>

      <div className="controls">


        <div className="adding-key">
          <label>
            Create New Key:
            <input type="text" value={addingKey} onChange={(e) => setAddingKey(e.target.value)}/>
          </label>

        </div>

        <div className="using-key">
          <label>
            Using Key:
            <input type="text" value={usingKey} onChange={(e) => setUsingKey(e.target.value)}/>
          </label>

        </div>

        <div className="value-type">
          <label>
            Using Value:
            <select type="text" value={valueType} onChange={(e) => setValueType(e.target.value)}>
              {options}
            </select>
          </label>
        </div>

        {valueTypeIsSubstring && <div className="delimiter">
          <label>
            Delimiter:
            <input type="text" value={delimiter} onChange={(e) => setDelimiter(e.target.value)}/>
          </label>
        </div>}

        {(valueTypeIsSubstring || valueTypeIsArray) && <div className="preview-segments">
          <label>
            Segment:
            {segmentsToDisplay}
          </label>
        </div>}

      </div>

      <div className="preview-and-submit">
        <div className="preview">
          Preview new Key:Value
          <br/>
          <br/>
          {prettyJson(preview)}
        </div>

        <div className="submit-key">
          <button onClick={() => addKey()}>Add</button>
        </div>
      </div>


      <div className="fudged-json-container json-container">
        <label>
          Output JSON:
          <div className="fudged-json json">
            {prettyJson(fudgedJson)}
          </div>
        </label>
      </div>

      <div className="output-schema-container json-container">
        <label>
          Schema:
          <div className="output-schema json">
            {prettyJson(schema)}
          </div>
        </label>
      </div>

    </div>
  )

}

export default SchemaGeneration;
