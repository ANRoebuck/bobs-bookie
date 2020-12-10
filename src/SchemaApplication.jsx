import React, { useState } from "react";
import './schema-generation.scss';
import { isValidJson, prettyJson, rawJson } from "./utils";

const SchemaApplication = () => {

  const [inputJson, setInputJson] = useState(prettyJson(rawJson));
  const [schema, setSchema] = useState('');
  const [outputJson, setOutputJson] = useState({});

  const isValid = isValidJson(inputJson) && isValidJson(schema);

  const bang = () => {
    const o = JSON.parse(inputJson);
    const evaluator = JSON.parse(schema);

    let output = {};

    // eslint-disable-next-line no-eval
    Object.entries(evaluator).forEach(([key, f]) => output[key] = eval(f));

    setOutputJson(output);
  }

  return (
    <div className="json-fudger">

      <div className="raw-json-container json-container">
        <label>
          Raw JSON:
        </label>
        <textarea className="raw-json json"
                  onChange={(e) => setInputJson(e.target.value)}
        >
          {inputJson}
        </textarea>
      </div>

      <div className="schema-input">
        <label>
          Input Schema:
        </label>
        <textarea className="schema-input json"
                  onChange={(e) => setSchema(e.target.value)}
        >
          {schema}
        </textarea>
      </div>

      <div className="preview-and-submit">
        <div className="submit-key">
          <button disabled={!isValid} onClick={() => bang()}>BANG</button>
        </div>
      </div>


      <div className="fudged-json-container json-container">
        <label>
          Output JSON:
          <div className="fudged-json json">
            {prettyJson(outputJson)}
          </div>
        </label>
      </div>

    </div>
  )

}

export default SchemaApplication;
