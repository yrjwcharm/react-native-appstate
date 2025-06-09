import { useState, useEffect } from 'react';
import { AppState, AppStateStatus, Platform } from 'react-native';


export default function useAppState(props:{
  onForeground?:()=>void,
  onBackground?:()=>void,
  onChange?:(currentState:AppStateStatus)=>void
}) {
  const { onChange, onForeground, onBackground } = props;
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(()=>{
    if(Platform.OS==='harmony'&& appState==='active'){
      onForeground?.();
    }
  },[])
  useEffect(() => {
    function handleAppStateChange(nextAppState:AppStateStatus) {
      if (nextAppState === 'active') {
        onForeground?.();
      } else if (nextAppState.match(/inactive|background/)) {
         onBackground?.();
      }
      setAppState(nextAppState);
      onChange?.(nextAppState);
    }
    const appState = AppState.addEventListener('change', handleAppStateChange);

    return () => appState.remove();
  }, [onChange, onForeground, onBackground]);
  return appState;
}
