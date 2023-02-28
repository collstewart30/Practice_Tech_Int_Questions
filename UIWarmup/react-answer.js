
//Walk through this file and explain what it does
//OVERVIEW: This is a form generator that takes descriptive data and generates a form based on that data
// And wires up the on change/on submit so each component handles it's own data

import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from 'MyProject/src/components/button';

//Importing componets from same project
import StringComponent from 'MyProject/src/components/form/string';
import TextComponent from 'MyProject/src/components/form/text';
import BoolComponent from 'MyProject/src/components/form/bool';
import TokenInputComponent from 'MyProject/src/components/form/token-input';
import SelectorComponent from 'MyProject/src/components/form/selector'; 

//A map tying the components to a string value (corresponds to type later on)
export const COMPONENTS = {
  string: StringComponent,
  text: TextComponent,
  boolean: BoolComponent,
  select_tag: SelectorComponent,
  subregion_select: SelectorComponent,
  country_select: SelectorComponent,
  token_input: TokenInputComponent,
};

const Field = ({type, label, ...props}) => { //Field component that takes a type and label, displays the type compontent with a label
  const FieldComponent = COMPONENTS[type] || StringComponent; //The type determines which imported component to use

  return (
    <View>
      <Text>
        {props.required ? ( //Optionally adds a * if the field is required
          <Text>*</Text>
        ) : null}
        {label}
      </Text>
      <FieldComponent
        {...props} //Pass props down to the component
      />
    </View>
  );
};

const Form = ({ //Form component that you can listen to change events and submit events
  onChange = () => {},
  onSubmit = () => {},
}) => {
  const [field_values, setFieldValues] = useState([]); //State hook to keep tract of the field values of the form

  const handleSubmit = (e) => {
    e.preventDefault(); //Don't do default button action 
    e.stopPropagation(); // Prevent event from bubbling past button
    onSubmit(field_values); //Pass the properties to onSubmit so components outside of the form can listen to the submit
  };

  const handleChange = (name, value) => {
    const _field_values = JSON.parse(JSON.stringify(field_values)); //A way to copy without keeping the reference to the original object
    _field_values[name] = value; //Sets the field based on the name passed to the value of the change (e.g. FirstName field changed to the new input of 'Bob')
    
    setFieldValues(_field_values); //Update the components state with the new values
    onChange(_field_values); //Trigger onChange so components outside of the form can listen to the change
  };

  return (
    <View>
      {Object.values(field_values).map( //Display all the fields of the form
        ({label, name, data, type = 'text', ...field}) => ( //default type to text if it isn't defined
          <Field //Generic Component from above, gets switched out with the specified component based on type
            key={name}
            name={name}
            type={type}
            label={label}
            value={data}
            {...field} //Pass the rest of the properties to the component
            onChange={handleChange} //Each component will handle it's own change event, and then trigger handleChange in this component
          />
        )
      )}
      <Button
        onPress={handleSubmit} //Trigger submit event on click of the button and pass the properties to onSubmit so components outside of the form can listen to the submit
        text={'Submit'}
      />
    </View>
  );
};

export default Form; //Make form component availble for import in other files
