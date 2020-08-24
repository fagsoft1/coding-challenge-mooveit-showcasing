# InputNumber
<p>
InputNumber component allow to create an input that fits your basic needs when you are creating forms.
</p>

## Import
    import {InputNumber} from 'mooveit-library-fagsoft';

## Examples

### label

    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber name='input_name' label='The CUSTOM Label'/>
    
<InputNumber label='The CUSTOM Label' name='input_name'/>

### decimalSeparator

#### Dot
    
    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber label="Dot Separator" decimalSeparator="."/>
<div>
    <InputNumber label="Dot Separator" decimalSeparator="."/>
</div>
    
#### Comma    
    
    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber label="Comma Separator" decimalSeparator=","/>
<div>
    <InputNumber label="Comma Separator" decimalSeparator=","/>
</div>

### value
Using margin

    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber name='input_name' label='The Label' value='200' />

<InputNumber name='input_name' label='The Label' value='200' />

### placeholder
Using margin

    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber name='input_name' label='The Label' placeholder="El placeholder" />

<InputText name='input_name' label='The Label' placeholder="El placeholder" />

### PROPS & METHODS

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| name    | 	string |Required| Component's Name |
| decimalSeparator  |  "." or  "," |.| Decimal's separator to be used |
| placeholder| 	string ||Placeholder|
| value    | 	string || Component's value |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| className| 	string ||  |
| disabled    | boolean |False| To enable or disable the component |
| onChange	    | ((e: ChangeEvent<HTMLInputElement>) => void) or undefined || To handle onChange event |