import { View, Image, StyleSheet} from 'react-native';

export const Imagem = () => {
    return (
    <View style={styles.imagem}>
        <Image style={styles.imagem} source={require('../../../../assets/print.jpg')} />
    </View>
    );
}

const styles = StyleSheet.create({
imagem: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 400,
    height: 400,
  },

});