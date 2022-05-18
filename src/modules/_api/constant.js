const STATUS = {
    PUBLISH: 'publish',
    UNPUBLISH: 'unpublish'
}

const ROLE = {
    ADMIN: 'admin',
    SITE_ADMIN: 'site_admin'
}
const BOOLEAN = {
    TRUE: 'true',
    FALSE: 'false'
}
const MASTER_FIELDS = {
    VALUE_TYPES: {
        SINGLE: 'single',
        RANGE: 'range',
        MULTIPLE: 'multiple',
    },
    INPUT_TYPES: {
        TEXTBOX: 'textbox',
        TEXTAREA: 'textarea',
        HTML: 'html',
        DATETIME: 'datetime',
        DATE: 'date',
        SELECT: 'select',
        RADIO: 'radio',
        CHECKBOX: 'checkbox',
        FILE: 'file',
        IMAGE: 'image',
    },
    DATA_SOURCES: {
        FIXED_VALUE: 'fixed_value',
        SQL: 'sql',
        MASTER: 'master',
    },
    DATA_TYPES: {
        INTEGER: 'int',
        FLOAT: 'float',
        VAECHAR: 'varchar',
        TEXT: 'TEXT',
        DATETIME: 'datetime',
        DATE: 'date',
    }
}

const SLOT_TYPES = {
    IMAGE: 'image',
    FILE: 'file',
    LIST: 'list',
    HTML: 'html'
}

const RANGE = {
    START: 'start',
    END: 'end',
}

export {
    STATUS,
    ROLE,
    MASTER_FIELDS,
    SLOT_TYPES,
    RANGE,
    BOOLEAN
}