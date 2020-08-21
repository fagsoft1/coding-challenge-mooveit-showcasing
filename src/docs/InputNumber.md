# InputNumber
<p>
InputNumber component allow to create an input that fits your basic needs when you are creating forms.
</p>

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
| label    | string |Required| |
| name    | string |Required| |
| decimalSeparator  |  "." /  "," / undefined |.| |
| onChange    | ((e: ChangeEvent<HTMLInputElement>) => void) / undefined || |
| label    | ((e: KeyboardEvent<HTMLInputElement>) => void) / undefined |Required| |