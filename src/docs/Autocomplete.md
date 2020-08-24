# Autocomplete
<p>
Your TEXT IN HERE
</p>

## Examples
    import {Autocomplete} from 'mooveit-library-fagsoft';
    <Autocomplete name='autocomplete' label='Favorite Animal' options={['Pig','Dog','Cat','Parrot','Pinguin','Bear','Lion','Lizard','Ant']}/>

<Autocomplete/>


### PROPS & METHODS

| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| label    | 	string |Required| Label to display |
| name    | 	string |Required| Component's Name |
| value    | 	string || Component's value |
| palette |"primary" or "secondary" |"primary"| Define with palette will be used |
| className| 	string ||  |
| disabled    | boolean |False| To enable or disable the component |
| onChange	    | ((e: ChangeEvent<HTMLInputElement>) => void) or undefined || To handle onChange event |
| options	    | Array || Options to show up by the component |