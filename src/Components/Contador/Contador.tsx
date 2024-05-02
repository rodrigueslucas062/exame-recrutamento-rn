import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Contador: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button
        title="Incrementar"
        testID="botaoIncrementar"
        onPress={incrementar}
      />
    </View>
  );
};

export default Contador;
