import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator, Image, View } from 'react-native';
import { navigationRef } from '../../utils/navigation';
import { ActionCreators } from '../../redux/action';

import BookDetails from '../../screens/LibraryScreen/BookDetails';
import BookPages from '../../screens/LibraryScreen/BookPages';

const Stack = createStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BookDetails" component={BookDetails} />
      <Stack.Screen name="BookPages" component={BookPages} />
      
    </Stack.Navigator>
  );
};

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isApiCall: true,
    };
  }

  render() {
    setTimeout(
      () =>
        this.setState({
          isApiCall: false,
        }),
      1300,
    );

    if (this.state.isApiCall) {
      return (
        // <ActivityIndicator
        //   style={{
        //     flex: 1,
        //     alignContent: 'center',
        //     justifyContent: 'center',
        //   }}
        //   color={'red'}
        //   size={100}
        // />
        <View style={{flex: 1, justifyContent:'center', alignContent:'center', backgroundColor:"#ffedd7"}}>
          <Image source={require('../../assets/images/loader.gif')} style={{resizeMode:'stretch', alignSelf:'center'}}/>
        </View>
      );
    } else {
      return (
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      );
    }
  }
}

const mapStateToProps = ({ authReducer }) => {
  if (authReducer) {
    return {
      authReducer: authReducer,
    };
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
