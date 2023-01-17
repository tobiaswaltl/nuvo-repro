import { NuvoImporter as NuvoImporterBase } from 'nuvo-react';

import logo from './logo.svg';
import './App.css';

async function validateRow(row) {
  return row.customer_code === 'invalid'
    ? Promise.resolve({ customer_code: { info: [{ message: 'This code is invalid', level: 'error' }] } })
    : Promise.resolve({});
}

const NuvoImporter = () => {
  return <NuvoImporterBase
      licenseKey="Enter license key here"
      onResults={async (result, identifier) => {
        // upload file...
      }}
      settings={{
        // requires the Pro plan
        multipleFileUpload: false,
        modal: false,
        disableSuccessModal: true,
        developerMode: true,
        identifier: 'human-resources',
        columns: [
          {
            label: "Customer Code",
            key: "customer_code",
            columnType: "category",
            dropdownOptions: [
              { value: "foo", label: "Option 1", type: "string", alternativeMatches: ["foo"] },
              { value: "bar", label: "Option 2", type: "string" },
              { value: "baz", label: "Option 3", type: "string" },
            ]
          },
          {
            label: "Customer Name",
            key: "customer_name",
          },
          {
            label: "Domain Name",
            key: "domain_name",
          },
          {
            label: "Region",
            key: "region",
          },
          {
            label: "Deal Size",
            key: "deal_size",
          },
          {
            label: "Address",
            key: "address",
          },
          {
            label: "Deal Stage",
            key: "deal_stage",
          },
          {
            label: "Pipeline",
            key: "pipeline",
          },
        ],
      }}
      onEntryInit={validateRow}
      onEntryChange={validateRow}
  >
    {'Select file'}
  </NuvoImporterBase>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NuvoImporter />
      </header>
    </div>
  );
}

export default App;
