package com.app;

import android.support.annotation.Nullable;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.arttitude360.reactnative.rngoogleplaces.RNGooglePlacesPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    protected ReactNativeHost createReactNativeHost() {//import android.content.Context;
        return new NavigationReactNativeHost(this) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    @Nullable
    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return Arrays.asList(
                new RNGooglePlacesPackage()
        );
    }

//    @Override
//    protected void attachBaseContext (Context base) {
//        super.attachBaseContext(base);
//        MultiDex.install(this);
//    }

}
