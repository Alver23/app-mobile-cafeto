import React from "react";
import { Text, TextInput } from "react-native";

// Components
import {TextError} from "../../../../components";

// Theme
import { textInputPrimaryStyle, textInputDangerStyle } from "../../../../utils/theme";

export default ({ error, onChangeValue }) => (
    <>
        <Text>Email</Text>
        <TextInput
            style={error ? textInputDangerStyle : textInputPrimaryStyle}
            autoCapitalize='none'
            onChangeText={value => onChangeValue(value)}
            textContentType='emailAddress'
        />
        <TextError message={error}/>
    </>
)
