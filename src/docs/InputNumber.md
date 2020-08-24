# InputNumber
<p>
InputNumber component allow to create an input that fits your basic needs when you are creating forms.
</p>

## Import
    import {InputNumber} from 'mooveit-library-fagsoft';

### Examples
    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber label="Dot Separator" decimalSeparator="."/>
    
<div>
    <InputNumber label="Dot Separator" decimalSeparator="."/>
</div>
    
    import {InputNumber} from 'mooveit-library-fagsoft';
    <InputNumber label="Comma Separator" decimalSeparator=","/>
<div>
    <InputNumber label="Comma Separator" decimalSeparator=","/>
</div>

### PROPS & METHODS

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| name    | 	string |Required| Component's Name |
| decimalSeparator  |  "." or  "," |.| Decimal's separator to be used |
| value    | 	string || Component's value |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| className| 	string ||  |
| disabled    | boolean |False| To enable or disable the component |
| onChange	    | ((e: ChangeEvent<HTMLInputElement>) => void) or undefined || To handle onChange event |
| onKeyDown	    | ((e: KeyboardEvent<HTMLInputElement>) => void) or undefined || To handle onKeyDown event |
| onKeyUp	    | ((e: KeyboardEvent<HTMLInputElement>) => void) or undefined || To handle onKeyUp event |