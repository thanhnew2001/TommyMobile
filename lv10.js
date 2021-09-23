import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

const YourApp = () => {
  const [cat, setCat] = useState('')

   return (
    <View style={{padding: 10}}>
    
      <Text style={{fontSize:50}}>{cat}</Text>
      
      
      
      
      
      
      
       <Button title='🔴 🟠 🟡 🟢 🔵 🟣' 
      onPress={()=>setCat('🔴 🟠 🟡 🟢 🔵 🟣')}
      />
      
      
      
      
      
      
      
       <Button title=' 🟥 🟧 🟨 🟩 🟦 🟪 ' 
      onPress={()=>setCat(' 🟥 🟧 🟨 🟩 🟦 🟪 ')}
      />
      
      
      
      
      
       <Button title='🏳️‍🌈🏳️‍🌈🏳️‍🌈' 
      onPress={()=>setCat('🏳️‍🌈🏳️‍🌈🏳️‍🌈')}
      />
      
      
      
      
      
      
      
       <Button title='❤️ 🧡 💛 💚 💙 💜 ' 
      onPress={()=>setCat('❤️ 🧡 💛 💚 💙 💜 ')}
      />
      
      
      
      
      
      
      
       <Button title='🌈🌈🌈' 
      onPress={()=>setCat('🌈🌈🌈')}
      />
      
      
      
      
      
      
      
       <Button title='🍎🍊🍋🍐🫐🍇' 
      onPress={()=>setCat('🍎🍊🍋🍐🫐🍇')}
      />

    </View>
  );

}

export default YourApp;
