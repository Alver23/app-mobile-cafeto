// Dependencies
import React, {FC} from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";

// Components
import Button from './../../../button';
import Card from "../../card-container";
import CardFooter from './../card-footer';

// Models
import { CardItem } from "../../card-interface";

// Styles
import styles from './../../styles';
import { BUTTON_SIZE_TYPES, BUTTON_VARIANT_TYPES } from "../../../../utils/theme";

const component: FC<CardItem> = ({ id, title, description, imageUrl, onSelectedOption}) => {
    const renderImage = (value: string) => {
        return value ? (<Image source={{uri: value}} style={styles.cardItemImage} />) : null;
    }
    const renderText = (value: string) => {
        return value ? (<Text>{value}</Text>) : null;
    }
    return (
        <Card>
            <View style={styles.cardItemContainer}>
                {renderImage(imageUrl)}
                <View style={styles.cardItem}>
                    {renderText(title)}
                    {renderText(description)}
                </View>
            </View>
            <CardFooter>
                <Button title="View more" variant={BUTTON_VARIANT_TYPES.primary} size={BUTTON_SIZE_TYPES.small} onClick={() => onSelectedOption && onSelectedOption({ id })}/>
            </CardFooter>
        </Card>
    )
}

export default component;
