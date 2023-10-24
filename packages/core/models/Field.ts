import FieldComponent from '@packages/components/Field'
import { generateUniqueId } from '@packages/core/helpers'

interface BaseFieldConfig<ValueType> {
    id?: string
    name: string
    label: string
    value?: ValueType
    placeholder?: string
    disabled?: boolean
    readonly?: boolean
    onchange?: (event: Event) => void | Promise<void>
}

interface TextFieldConfig extends BaseFieldConfig<string> {
    type: 'text'
}

interface TextareaFieldConfig extends BaseFieldConfig<string> {
    type: 'textarea'
}

interface EmailFieldConfig extends BaseFieldConfig<string> {
    type: 'email'
}

interface URLFieldConfig extends BaseFieldConfig<string> {
    type: 'url'
}

interface ColorFieldConfig extends BaseFieldConfig<string> {
    type: 'color'
}

interface PasswordFieldConfig extends BaseFieldConfig<string> {
    type: 'password'
}

interface NumberFieldConfig extends BaseFieldConfig<number> {
    type: 'number'
    min?: number
    max?: number
    step?: number
}

interface RangeFieldConfig extends BaseFieldConfig<number> {
    type: 'range'
    min?: number
    max?: number
    step?: number
}

interface CheckboxFieldConfig extends BaseFieldConfig<boolean> {
    type: 'checkbox'
    checked?: boolean
}

interface RadioFieldConfig extends BaseFieldConfig<boolean> {
    type: 'radio'
    checked?: boolean
}

interface ToggleFieldConfig extends BaseFieldConfig<boolean> {
    type: 'toggle'
    checked?: boolean
    checked_label?: string
    unchecked_label?: string
}

interface SelectFieldConfig extends BaseFieldConfig<string> {
    type: 'select'
    multiple?: boolean
    options: Array<{ 
        value: string 
        label: string
        readonly?: boolean
        disabled?: boolean
    }>
}

interface TimezoneFieldConfig extends BaseFieldConfig<string> {
    type: 'timezone'
}


export type FieldConfig = 
    | TextFieldConfig
    | TextareaFieldConfig
    | EmailFieldConfig
    | URLFieldConfig
    | ColorFieldConfig
    | PasswordFieldConfig
    | NumberFieldConfig
    | RangeFieldConfig
    | CheckboxFieldConfig
    | RadioFieldConfig
    | ToggleFieldConfig
    | SelectFieldConfig
    | TimezoneFieldConfig

export class Field {

    public readonly config: FieldConfig
    public static Component = FieldComponent

    public constructor(config: FieldConfig) {
        this.config = config
        this.config.id = config.id ?? generateUniqueId(`${config.type}-field`)
    }

}
