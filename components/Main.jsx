import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const imgPrincipal =
    "https://github.com/JeinerHI/OwnDevs/blob/DanyProyect/img/entrenador-flexing-dorsal-titan-fit.png?raw=true";
//const imgPrincipal = require('./assets/myImg/entrenador-flexing-dorsal-titan-fit.png');

export function Main() {
    
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View>
                <Image source={{ uri: imgPrincipal }} style={styles.imagen} />
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>Este es mi texto de ejemplo</Text>
                <Text style={styles.text}>Otro texto de ejemplo</Text>
                <Pressable
                    onPress={onPressFunction}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    {({ pressed }) => (
                        <Text style={styles.buttonText}>
                            {pressed ? "Pressed!" : "Press Me"}
                        </Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1f2933",
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#ffffff",
    },

    imagen: {
        marginTop: 0,
        width: 390,
        height: 400,
    },

    button: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        borderEndWidth: 2,
        borderStartWidth: 2,
        borderColor: "#00ff00",
    },

    buttonPressed: {
        backgroundColor: "#00ff0049",
    },

    buttonText: {
        color: "#00ff00",
    },
});

const onPressFunction = () => {
    alert("Boton presionado!");
};
