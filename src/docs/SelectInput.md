# SelectInput
<p>
Select components are used for collecting user provided information from a list of options.
</p>

## Import
    import {SelectInput} from 'mooveit-library-fagsoft';
## Options
<p>
    Options are a dictionary which structure is {value: number|string, text: string}
</p>
    
    options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}]

## Examples
    import {SelectInput} from 'mooveit-library-fagsoft';
    <SelectInput 
        options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] 
        label='Select Input Multiple' 
        name='opciones_multiples'
    />
<SelectInput label='Select Input ' name='opciones' />

### multiple
    import {SelectInput} from 'mooveit-library-fagsoft';
    <SelectInput 
        options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] 
        label='Select Input Multiple' name='opciones_multiples' 
        multiple={true}
    />
<SelectInput label='Select Input Multiple ' name='opciones_multiples' multiple={true} />

### label
    import {SelectInput} from 'mooveit-library-fagsoft';
    <SelectInput 
        options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] 
        label='Select Input Multiple CUSTOM' 
        name='opciones_multiples' 
        multiple={true}
    />
<SelectInput label='Select Input Multiple CUSTOM' name='opciones_multiples' multiple={true} />

### value
    import {SelectInput} from 'mooveit-library-fagsoft';
    <SelectInput 
        options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] 
        label='Select Input Multiple' 
        name='opciones_multiples' 
        value: {2},
        multiple={true}
    />
<SelectInput label='Select Input Multiple' name='opciones_multiples' value={2} />

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| value |string or number or readonly string[]|undefined| Component's Value |
| disabled    | boolean |False| To enable or disable the component |
| multiple    | boolean |False| To make multiple selections |
| options    | [{ value:string, text:string },...] |Required| Options to be show up by the component |