package com.app;

import android.support.annotation.Nullable;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;

import java.util.ArrayList;
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
        List<ReactPackage> packages = new ArrayList<>();
        return packages;
    }

//    @Override
//    protected void attachBaseContext (Context base) {
//        super.attachBaseContext(base);
//        MultiDex.install(this);
//    }

}
