// Dependencies
import React, {FC, ReactNode} from "react";
import {View, Text} from "react-native";

// Styles
import styles from './styles'

// Models
import { CardProps } from "./card-interface";

const component: FC<CardProps> = ({ children }) => {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    )
}

export default component;
