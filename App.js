import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

class Botao extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    let tamanho = 1;
    if (props.tamanho) {
      tamanho = parseInt(props.tamanho);
    }
    let bg = "#E0E0E0";
    if (props.bg) {
      bg = props.bg;
    }

    this.styles = StyleSheet.create({
      area: {
        flex: tamanho,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#999",
        backgroundColor: bg
      },
      text: {
        fontSize: 18
      }
    });
  }
  render() {
    return (
      <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
        <Text style={this.styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { result: "0" };

    this.btn = this.btn.bind(this);
  }

  btn(text) { 
    let s = this.state;

    if (text === "C") {
      s.result = "0";
    }else if (text === "=") {
      s.result = eval(s.result);
    }else if (s.result === "0") {
      s.result = text;
    }else{
      s.result += text;
    }

    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.linha}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.linha}>
          <Botao
            text="C"
            tamanho="3"
            bg="#CCC"
            onPress={() => {
              this.btn("C");
            }}
          />
          <Botao
            text="/"
            onPress={() => {
              this.btn("/");
            }}
            bg="#FD9526"
          />
        </View>
        <View style={styles.linha}>
          <Botao
            text="7"
            onPress={() => {
              this.btn("7");
            }}
          />
          <Botao
            text="8"
            onPress={() => {
              this.btn("8");
            }}
          />
          <Botao
            text="9"
            onPress={() => {
              this.btn("9");
            }}
          />
          <Botao
            text="*"
            onPress={() => {
              this.btn("*");
            }}
            bg="#FD9526"
          />
        </View>
        <View style={styles.linha}>
          <Botao
            text="4"
            onPress={() => {
              this.btn("4");
            }}
          />
          <Botao
            text="5"
            onPress={() => {
              this.btn("5");
            }}
          />
          <Botao
            text="6"
            onPress={() => {
              this.btn("6");
            }}
          />
          <Botao
            text="-"
            onPress={() => {
              this.btn("-");
            }}
            bg="#FD9526"
          />
        </View>
        <View style={styles.linha}>
          <Botao
            text="1"
            onPress={() => {
              this.btn("1");
            }}
          />
          <Botao
            text="2"
            onPress={() => {
              this.btn("2");
            }}
          />
          <Botao
            text="3"
            onPress={() => {
              this.btn("3");
            }}
          />
          <Botao
            text="+"
            onPress={() => {
              this.btn("+");
            }}
            bg="#FD9526"
          />
        </View>
        <View style={styles.linha}>
          <Botao
            text="0"
            onPress={() => {
              this.btn("0");
            }}
            tamanho="2"
          />
          <Botao
            text="."
            onPress={() => {
              this.btn(".");
            }}
          />
          <Botao
            text="="
            onPress={() => {
              this.btn("=");
            }}
            bg="#FD9526"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  linha: {
    flex: 1,
    flexDirection: "row"
  },
  result: {
    backgroundColor: "#000",
    color: "#FFF",
    fontSize: 50,
    flex: 1,
    textAlign: "right"
  }
});
