import React, { useState } from "react";
import { View, Image, Pressable, StyleSheet } from "react-native";

const Krutopijeramikecil = [
  "https://i.pinimg.com/736x/5c/db/09/5cdb09c55bceddbe99670372780546ae.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfkn5bBQzskYbpmlsXij2M58vwNC9okifkCQ&s",
  "https://i.pinimg.com/736x/88/2f/e7/882fe729340b6d27ff3f397e594c3f5d.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsF5m9Jr0fgOFNNfwfWXQRInjkO_IJkPLavw&s",
  "https://i.pinimg.com/736x/81/7e/a5/817ea5ea5fbaf170065fcfb312f50dff.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmB3zHWx4URjmsu7RietyY8oP5OP8huGL9Q&s",
  "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/854/2024/12/23/Nico-Robin-Kid-young-One-Piece-3001585893.jpg",
  "https://i.pinimg.com/736x/36/7b/18/367b18a117159121cfd90a10bf91d258.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSco9vE3AJCcRJo3qaM4fyixdfNPWopoEj438AZ66zQgIPFSRf_Bcn2qqj6I4tA7AZyDPQ&usqp=CAU",
];

const Krutopijeramibesar = [
  "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/408/2025/04/18/30151-17448211994315-1920-4226333009.jpg",
  "https://cdnwpseller.gramedia.net/wp-content/uploads/2023/02/roronoza-zoro.webp",
  "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2023/01/05/1731101867.jpg",
  "https://i.pinimg.com/736x/19/fb/aa/19fbaa5fc273d44b56f2dee1dd270f81.jpg",
  "https://assets.jabarekspres.com/sukabumi/2023/12/Usopp.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtzb6mC3IEdTfTgor-15kzMw6C9Y1I0vkrw&s",
  "https://cdn.rri.co.id/berita/Bengkulu/o/1736514139954-nico-robin-and-poneglyph/f9fu7pog1p8mh0u.jpeg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOo6IC2tFhEWKdftQgckfz-84u7iE1JrKDvQ&s",
  "https://image.ggwp.id/post/20250306/teknikjinbe5.jpg",
];

export default function App() {
  const [states, setStates] = useState(
    Array(9)
      .fill(0)
      .map(() => ({
        isAlt: false,
        scale: 1,
      }))
  );

  const handlePress = (idx: number) => {
    setStates((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item;
        const nextScale = Math.min(item.scale * 1.2, 2);
        return { isAlt: true, scale: nextScale };
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {Krutopijeramikecil.map((img, idx) => (
          <Pressable
            key={idx}
            onPress={() => handlePress(idx)}
            style={styles.cell}
          >
            <Image
              source={{ uri: states[idx].isAlt ? Krutopijeramibesar[idx] : img }}
              style={[
                styles.image,
                {
                  transform: [{ scale: states[idx].scale }],
                },
              ]}
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f0f0f5",
  },
  
grid: {
  width: 330,
  flexDirection: "row",
  flexWrap: "wrap",
  },

cell: {
  width: 110,
  height: 110,
  justifyContent: "center",
  alignItems: "center",
  },

image: {
  width: 100,
  height: 100,
  borderRadius: 10,
  backgroundColor: "#ccc",
  },

});
