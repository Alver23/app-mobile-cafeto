import React, { FC } from "react";
import { Button, View } from "react-native";

// Theme
import { buttonVariants, BUTTON_VARIANT_TYPES } from "../../utils/theme";

interface Props {
    title: string;
    isDisabled: boolean;
    color: string;
    variant: BUTTON_VARIANT_TYPES;
    onClick: any;
}
export const component: FC<Props> = ({ title, isDisabled, color, variant, onClick }) => {
    const { disabled } = buttonVariants;
    return (
        <View style={isDisabled ? disabled : buttonVariants[variant] }>
            <Button
                disabled={isDisabled}
                title={title}
                color={color}
                onPress={onClick}
            />
        </View>
    )
}

export default component;
