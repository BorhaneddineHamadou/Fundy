import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class CategoryThree extends Component {
    render() {
        return (
            <View style={{ height: 150, width: 230, marginRight: 20, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, borderRadius: 12}}
                    />
                </View>
            </View>
        );
    }
}
export default CategoryThree;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});