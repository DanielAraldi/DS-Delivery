import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Alert,
  Linking,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";

import { confirmDelivey } from "../../services/api";

import Header from "../../components/Header";
import OrderCard from "../../components/OrderCard";

import { Order } from "../../@types/types";

type Props = {
  route: {
    params: {
      order: Order;
    };
  };
};

export default function OrderDetails({ route }: Props) {
  const { order } = route.params;

  const navigation = useNavigation();

  const handleOnCancel = () => {
    navigation.navigate("Orders");
  };

  const handleConfirmDelivery = () => {
    confirmDelivey(order.id)
      .then(() => {
        Alert.alert(`Pedido ${order.id} confirmado com sucesso!`);
        navigation.navigate("Orders");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(`Houve um erro ao confirmar o pedido ${order.id}!`);
      });
  };

  const handleStartNavigation = () => {
    /* Opens web addresses */
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${order.latitude},${order.longitude}`
    );
  };

  return (
    <>
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <OrderCard order={order} />
          <RectButton style={styles.button} onPress={handleStartNavigation}>
            <Text style={styles.buttonText}>INICIAR NAVEGAÇÃO</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleConfirmDelivery}>
            <Text style={styles.buttonText}>CONFIRMAR ENTREGA</Text>
          </RectButton>
          <RectButton style={styles.button} onPress={handleOnCancel}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  button: {
    backgroundColor: "#DA5C5C",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: -5,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    fontWeight: "bold",
    fontSize: 18,
    color: "#FFF",
    letterSpacing: -0.24,
    fontFamily: "OpenSans_700Bold",
  },
});
