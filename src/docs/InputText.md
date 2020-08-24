# InputText
<p>
Text fields let users enter and edit text when creating form or components.
</p>

## Import
    import {InputText} from 'mooveit-library-fagsoft';

## Examples
### label

    import {InputText} from 'mooveit-library-fagsoft';
    <InputText name='input_name' label='The CUSTOM Label'/>
    
<InputText label='The CUSTOM Label' name='input_name'/>

### disabled
    import {InputText} from 'mooveit-library-fagsoft';
    <InputText name='input_name' label='The Label' disabled={true} />

<InputText name='input_name' label='The Label' disabled={true} />

### value
Using margin

    import {InputText} from 'mooveit-library-fagsoft';
    <InputText name='input_name' label='The Label' value='Initial' />

<InputText name='input_name' label='The Label' value='Initial' />

### className
Using margin

    import {InputText} from 'mooveit-library-fagsoft';
    <InputText name='input_name' label='The Label' className="m-4" />

<InputText name='input_name' label='The Label' className="m-4" />

### placeholder
Using margin

    import {InputText} from 'mooveit-library-fagsoft';
    <InputText name='input_name' label='The Label' placeholder="El placeholder" />

<InputText name='input_name' label='The Label' placeholder="El placeholder" />


### PROPS & METHODS

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| name    | 	string |Required| Component's Name |
| placeholder| 	string ||Placeholder|
| value    | 	string || Component's value |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| className| 	string ||  |
| disabled    | boolean |False| To enable or disable the component |
| onChange	    | ((e: ChangeEvent<HTMLInputElement>) => void) or undefined || To handle onChange event |
    