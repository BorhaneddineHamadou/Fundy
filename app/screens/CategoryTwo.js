import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class CategoryTwo extends Component {
    render() {
        return (
            <View style={{ height: 140, width: 169, marginRight: 20, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, borderRadius: 12, borderTopLeftRadius: 23, borderTopRightRadius: 23}}
                    />
                </View>
            </View>
        );
    }
}
export default CategoryTwo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});