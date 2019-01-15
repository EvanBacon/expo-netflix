import React from 'react';
import { View, WebView } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import Header from '../components/Header';

const ModalWebView = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header close closeText="Close" navigation={navigation} showLogoFull />

      <WebView
        bounces={false}
        javaScriptEnabled
        scalesPageToFit
        source={{ uri: navigation.getParam('url', 'https://netflix.com') }}
        startInLoadingState
      />
    </View>
  );
};

ModalWebView.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalWebView;