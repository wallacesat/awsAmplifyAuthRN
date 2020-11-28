import { NativeModules, Platform } from 'react-native'
import { I18n } from '@aws-amplify/core'

let langRegionLocale = 'pt_BR'

// If we have an Android phone
if (Platform.OS === 'android') {
  langRegionLocale = NativeModules.I18nManager.localeIdentifier || ''
} else if (Platform.OS === 'ios') {
  langRegionLocale = NativeModules.SettingsManager.settings.AppleLocale || ''
}

const authScreenLabels = {
  en: {
    'Sign Up': 'Create new account',
    'Sign Up Account': 'Create a new account'
  },
  pt: {
    'Sign Up': 'Novo cadastro',
    'Forgot Password': 'Esqueceu a senha?',
    'Sign In Account': 'Conta de login',
    'Enter your email': 'Informe seu e-mail',
    'Enter your password': 'Informe sua senha',
    Password: 'Senha',
    'Sign In': 'Login',
    'Please Sign In / Sign Up': 'Por favor Login / Cadastro',
    'Sign in to your account': 'Entrar com sua conta',
    'Create a new account': 'Criar uma nova conta',
    'Confirm a Code': 'Confirmar o código',
    'Confirm Sign Up': 'Confirme o cadastro',
    'Resend code': 'Reenviar código',
    'Back to Sign In': 'Voltar para o Login',
    Confirm: 'Confirmar',
    'Confirmation Code': 'Código de confirmação',
    'Sign Out': 'Sair'
  }
}

// "en_US" -> "en", "es_CL" -> "es", etc
const languageLocale = langRegionLocale.substring(0, 2)
I18n.setLanguage(languageLocale)
I18n.putVocabularies(authScreenLabels)

const Localei18n = () => null

export { Localei18n }