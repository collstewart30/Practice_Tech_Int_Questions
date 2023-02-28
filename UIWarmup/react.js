
//Walk through this file and explain what it does

// 1. review React documentation

import React, {useState} from 'react';
import {View, Text} from 'react-native';    // View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. Text is a component for displaying text; supports nexting, styling, touch handling.
import Button from 'CatalystPortalMobile/src/components/button';

import StringComponent from 'CatalystPortalMobile/src/components/form/string';
import TextComponent from 'CatalystPortalMobile/src/components/form/text';
import BoolComponent from 'CatalystPortalMobile/src/components/form/bool';
import TokenInputComponent from 'CatalystPortalMobile/src/components/form/token-input';
import SelectorComponent from 'CatalystPortalMobile/src/components/form/selector';

export const COMPONENTS = {
  string: StringComponent,
  text: TextComponent,
  boolean: BoolComponent,
  select_tag: SelectorComponent,
  subregion_select: SelectorComponent,
  country_select: SelectorComponent,
  token_input: TokenInputComponent,
};

const Field = ({type, label, name, ...props}) => {
  const FieldComponent = COMPONENTS[type] || StringComponent;

  return (
    <View>
      <Text>
        {props.required ? (
          <Text>*</Text>
        ) : null}
        {label}
      </Text>
      <FieldComponent
        {...props}
      />
    </View>
  );
};

const Form = ({
  onChange = () => {},
  onSubmit = () => {},
}) => {
  const [field_values, setFieldValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();    // prevents further propogation of the current event in the capturing and bubbling phases. it does not prevent default behaviors from occurring (clicks on links are still processed)
    onSubmit(field_values);
  };

  const handleChange = (name, value) => {
    const _field_values = JSON.parse(JSON.stringify(field_values));
    _field_values[name] = value;
    
    setFieldValues(_field_values);
    onChange(_field_values);
  };

  return (
    <View>
      {Object.values(field_values).map(
        ({label, name, data, type = 'text', ...field}) => (
          <Field
            key={name}
            name={name}
            type={type}
            label={label}
            value={data}
            {...field}
            onChange={handleChange}
          />
        )
      )}
      <Button
        onPress={handleSubmit}
        text={'Submit'}
      />
    </View>
  );
};

export default Form;


// answer: form where each component handles its own data