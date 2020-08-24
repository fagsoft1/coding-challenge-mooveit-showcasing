# ThemeContextProvider
<p>
Component used to set a custom theme.
</p>

## Import
    import {ThemeContextProvider} from 'mooveit-library-fagsoft';

## Default Theme
<p>
Colors used by the defaul theme are:
Primary: Black
Secondary: Red
</p>
    const defaultTheme: ITheme = {
        palette: {
            primary: {main: 'black', contrast: 'white'},
            secondary: {main: 'red', contrast: 'white'},
        },
    };

## Examples
<p>
The theme's structure must be this way:
</p>
    const theme = {
        palette: {
            primary: {main: 'green', contrast: 'white'},
            secondary: {main: 'blue', contrast: 'white'},
        },
    };
    
<p>
ThemeContextProvider must be used like this:
</p>  

    <ThemeContextProvider theme={theme}>
        <div>
            <h3>Button</h3>
            <Button 
                text="Palette Primary" 
                name="two_2" 
                palette="primary" 
            />
        </div>
        <div>
            <h3>InputNumber</h3>
            <InputNumber 
                label="Comma Separator" 
                decimalSeparator=","
                palette="primary"
            />
        </div>
        <div>
            <h3>InputText</h3>
            <InputText 
                label='Nombre' 
                palette="primary"
            />
        </div>
        <div>
            <h3>SelectInput</h3>
            <SelectInput 
                label='Select Input Multiple ' 
                name='opciones_multiples' 
                multiple={true} 
                options: [{value: 1, text: 'Select One'}, {value: 2, text: 'Select Two'}] 
            />
        </div>
        <div>
            <h3>Autocomplete</h3>
            <Autocomplete
                options: ['Pig', 'Dog', 'Cat', 'Parrot', 'Pinguin', 'Bear', 'Lion', 'Lizard', 'Ant']
                name: "autocomplete" 
                label: "Favorite Animal"
                palette="primary"
            />
        </div>
    </ThemeContextProvider>
    
<ThemeContextProvider theme={theme}>
    <div>
        <h3>Button</h3>
        <Button text="Palette Primary" name="two_2" palette="primary" />
    </div>
    <div>
        <h3>InputNumber</h3>
        <InputNumber label="Comma Separator" decimalSeparator="," palette="primary"/>
    </div>
    <div>
        <h3>InputText</h3>
        <InputText label='Nombre' palette="primary"/>
    </div>
    <div>
        <h3>SelectInput</h3>
        <SelectInput label='Select Input Multiple ' name='opciones_multiples' multiple={true} />
    </div>
    <div>
        <h3>Autocomplete</h3>
        <Autocomplete palette="primary"/>
    </div>
</ThemeContextProvider>

### PROPS & METHODS
| Prop name   |Type| Default|Description|
| --------- |-------|-------|-------|
| them    | Ithem Props |Required| Custom Theme |