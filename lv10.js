import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';

const YourApp = () => {
  const [cat, setCat] = useState('')

   return (
    <View style={{padding: 10}}>
    
      <Text style={{fontSize:50}}>{cat}</Text>
      
      
      
      
      
      
      
       <Button title='๐ด ๐  ๐ก ๐ข ๐ต ๐ฃ' 
      onPress={()=>setCat('๐ด ๐  ๐ก ๐ข ๐ต ๐ฃ')}
      />
      
      
      
      
      
      
      
       <Button title=' ๐ฅ ๐ง ๐จ ๐ฉ ๐ฆ ๐ช ' 
      onPress={()=>setCat(' ๐ฅ ๐ง ๐จ ๐ฉ ๐ฆ ๐ช ')}
      />
      
      
      
      
      
       <Button title='๐ณ๏ธโ๐๐ณ๏ธโ๐๐ณ๏ธโ๐' 
      onPress={()=>setCat('๐ณ๏ธโ๐๐ณ๏ธโ๐๐ณ๏ธโ๐')}
      />
      
      
      
      
      
      
      
       <Button title='โค๏ธ ๐งก ๐ ๐ ๐ ๐ ' 
      onPress={()=>setCat('โค๏ธ ๐งก ๐ ๐ ๐ ๐ ')}
      />
      
      
      
      
      
      
      
       <Button title='๐๐๐' 
      onPress={()=>setCat('๐๐๐')}
      />
      
      
      
      
      
      
      
       <Button title='๐๐๐๐๐ซ๐' 
      onPress={()=>setCat('๐๐๐๐๐ซ๐')}
      />

    </View>
  );

}

export default YourApp;
