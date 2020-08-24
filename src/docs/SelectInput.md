# SelectInput
<p>
Your TEXT IN HERE
</p>

## Examples
    import {SelectInput} from 'mooveit-library-fagsoft';
    <SelectInput options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] label='Select Input Multiple' name='opciones_multiples'/>
<SelectInput label='Select Input ' name='opciones' />

### multiple
    import {SelectInput} from 'mooveit-library-fagsoft';
    <SelectInput options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] label='Select Input Multiple' name='opciones_multiples' multiple={true}/>
<SelectInput label='Select Input Multiple ' name='opciones_multiples' multiple={true} />

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| value |string or number or readonly string[]|undefined| Component's Value |
| disabled    | boolean |False| To enable or disable the component |
| multiple    | boolean |False| To make multiple selections |
| options    | [{ value:string, text:string },...] |Required| Options to be show up by the component |