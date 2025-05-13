# ===== MATERIAL COMPONENTS =====
-keep class com.nativescript.material.** { *; }
-keep class * implements com.nativescript.material.core.* { *; }

# ===== VUE SPECIFIC =====
-keep class * extends com.tns.NativeScriptVueV8 { *; }

# ===== LAYOUT RESOURCES ===== 
-keep class **.R$layout { *; }

# ===== NATIVESCRIPT CORE =====
-keep class com.tns.** { *; }
-keep class org.nativescript.** { *; }

# ===== ANDROID COMPONENTS =====
-keep class * extends android.app.Fragment { *; }
-keep class * extends android.app.Activity { *; }
-keep class * extends android.view.View { *; }

# ===== RESOURCE IDs (Recommended Addition) =====
-keepclassmembers class **.R$* {
    public static <fields>;
}