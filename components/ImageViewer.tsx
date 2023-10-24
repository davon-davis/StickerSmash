import {StyleSheet, Image} from 'react-native';

type ImageViewerProps = {
    placeholderImageSource: any
    selectedImage: any
}

export const ImageViewer = (props: ImageViewerProps) => {
    const {placeholderImageSource, selectedImage} = props
    const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;

    return (
        <Image source={imageSource} style={styles.image}/>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
