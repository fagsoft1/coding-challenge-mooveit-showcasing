# Autocomplete
<p>
The autocomplete is a normal text input enhanced by a panel of suggested options.
</p>


## Import
    import {Autocomplete} from 'mooveit-library-fagsoft';

## Examples
### placeholder
    import {Autocomplete} from 'mooveit-library-fagsoft';
    <Autocomplete 
        name='autocomplete'
        placeholder='The placeholder' 
        label='Favorite Animal' 
        options={['Pig','Dog','Cat','Parrot','Pinguin','Bear','Lion','Lizard','Ant']}
    />

<Autocomplete name='autocomplete' label='Favorite Animal' placeholder='The placeholder' />

### options
    import {Autocomplete} from 'mooveit-library-fagsoft';
    <Autocomplete 
        name='autocomplete' 
        label='Favorite Animal' 
        options={['Pig','Dog','Cat','Parrot','Pinguin','Bear','Lion','Lizard','Ant']}
    />

<Autocomplete name='autocomplete' label='Favorite Animal' />

### label

    import {Autocomplete} from 'mooveit-library-fagsoft';
    <Autocomplete 
        name='autocomplete' 
        label='Favorite Animal CUSTOM' 
        options={['Pig','Dog','Cat','Parrot','Pinguin','Bear','Lion','Lizard','Ant']}
    />
    
<Autocomplete name='autocomplete' label='Favorite Animal CUSTOM'/>


### value
    import {Autocomplete} from 'mooveit-library-fagsoft';
    <Autocomplete 
        name='autocomplete' 
        label='Favorite Animal'
        value='Pig' 
        options={['Pig','Dog','Cat','Parrot','Pinguin','Bear','Lion','Lizard','Ant']}
    />

<Autocomplete name='autocomplete' label='Favorite Animal' value='Pig' />


### disabled
    import {Autocomplete} from 'mooveit-library-fagsoft';
    <Autocomplete 
        name='autocomplete' 
        label='Favorite Animal'
        value='Pig' 
        options={['Pig','Dog','Cat','Parrot','Pinguin','Bear','Lion','Lizard','Ant']}
    />

<Autocomplete name='autocomplete' label='Favorite Animal' disabled={true} />

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
| options	    | Array || Options to show up by the component|