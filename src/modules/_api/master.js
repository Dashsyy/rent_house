const inputTypes = [
  {
    label: 'textbox',
    value: 'textbox',
  },
  {
    label: 'textarea',
    value: 'textarea',
  },
  { 
    label: 'html',
    value: 'html',
  },
  {
    label: 'datetime',
    value: 'datetime',
  },
  {
    label: 'date',
    value: 'date',
  },
  {
    label: 'select',
    value: 'select',
  },
  { 
    label: 'radio',
    value: 'radio',
  },
  {
    label: 'checkbox',
    value: 'checkbox',
  },
  {
    label: 'file',
    value: 'file',
  },
  {
    label: 'image',
    value: 'image',
  }
];

const dataTypes = [
  {
    label: 'integer',
    value: 'int',
  },
  {
    label: 'float',
    value: 'float',
  },
  {
    label: 'varchar',
    value: 'varchar',
  },
  {
    label: 'text',
    value: 'text',
  },
  { 
    label: 'datetime',
    value: 'datetime',
  },
  {
    label: 'date',
    value: 'date',
  }
];

const dataSources = [
  {
    label: 'fixed',
    value: 'fixed_value',
  },
  {
    label: 'sql',
    value: 'sql',
  },
  {
    label: 'master',
    value: 'master',
  }
];

const valueTypes = [
  {
    label: 'single',
    value: 'single',
  },
  {
    label: 'range',
    value: 'range',
  },
  {
    label: 'multiple',
    value: 'multiple',
  }
];

const requiredOptions = [
  {
    label: 'Yes',
    value: 'required',
  },
  {
    label: 'No',
    value: 'not_required'
  }
];

const publishOptions = [
  {
    label: 'Yes',
    value: 'publish',
  },
  {
    label: 'No',
    value: 'unpublish'
  }
];

const displayList = [
  {
    label: 'True',
    value: 'true',
  },
  {
    label: 'False',
    value: 'false'
  }
];

export {
  inputTypes, 
  dataTypes, 
  dataSources, 
  valueTypes,
  requiredOptions, 
  publishOptions,
  displayList
};
