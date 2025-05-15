<script setup lang="ts">
import {
  Dialogs,
  FlexboxLayout,
  FormattedString,
  Label,
  RootLayout,
  Span,
  StackLayout,
  TextField,
} from "@nativescript/core";

import { $navigateTo, ref } from "nativescript-vue";
import Home from "~/pages/Home.vue";
import api from "~/services/api_service";
import SignUp from "./SignUp.vue";
import { navigate } from "~/utils/navigation";
import { Toast } from "~/services/toast_service";

const showPassword = ref<boolean>(false);

const form = ref({
  email: "",
  password: "",
});

const handleFormSubmit = async () => {
  try {
    console.log("Form Submitted", form.value);

    const response = await api.auth.login({
      email: form.value.email,
      password: form.value.password,
    });

    if (response.status === 200) {
      await Toast.showSuccess("Login Successful");
      console.log("Login Successful");
      $navigateTo(Home, { clearHistory: true });
    } else {
      await Toast.showError("Invalid email or password");
      console.log("Login Failed with status:", response.status);
      // Dialogs.alert({
      //   title: "Login Failed",
      //   message: "Invalid email or password",
      //   okButtonText: "OK",
      // });
    }

    form.value.email = "";
    form.value.password = "";
  } catch (error) {
    console.error("Login Failed", error);
    await Toast.showError("Login failed. Please try again.");
    // Dialogs.alert({
    //   title: "Error",
    //   message: "Login failed. Please try again.",
    //   okButtonText: "OK",
    // });
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const navigateToSignup = () => {
  navigate(SignUp);
};
</script>

<template>
  <Page actionBarHidden="true">
    <RootLayout>
      <StackLayout>
        <StackLayout class="bg-[#54B469] py-10 px-5 text-white">
          <Label
            text="Let’s Get You Started"
            fontSize="24"
            class="font-medium mb-5"
          />
          <Label textWrap="true" class="" fontSize="14" lineHeight="5">
            <FormattedString>
              <Span text="Create an account to keep your \n" />
              <Span text="environment clean." />
            </FormattedString>
          </Label>
        </StackLayout>

        <!-- Form Fields-->
        <StackLayout class="px-6 pt-5">
          <!-- Email Address -->
          <Label text="Email Address" class="text-black mb-2" fontSize="20" />
          <TextField
            v-model="form.email"
            hint="Ecobin@gmail.com"
            keyboardType="email"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798]"
          />
          <!-- Email Address -->

          <!-- Password -->
          <Label text="Password" class="text-black mb-2" fontSize="20" />
          <FlexboxLayout
            class="justify-between items-center mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl"
          >
            <TextField
              v-model="form.password"
              :secure="!showPassword"
              hint="Enter your password"
              class="flex=grow placeholder:text-[#7E8798]"
            />
            <Label
              @tap="togglePasswordVisibility"
              fontSize="20"
              class="fa text-[#7E8798]"
              :text="showPassword ? '&#xf070;' : '&#xf06e;'"
            />
          </FlexboxLayout>

          <Button
            text="Create Account"
            class="bg-[#54B469] text-white py-5 rounded-xl"
            @tap="handleFormSubmit"
          />

          <!-- Terms -->
          <StackLayout>
            <Label
              lineHeight="5"
              fontSize="20"
              class="text-center mt-4 text-[#575E6C]"
              textWrap="true"
            >
              <FormattedString>
                <Span text="By signing up, you agree to EcoBin's " />
                <Span text="Terms of \n Service" class="text-[#54B469]" />
                <Span text=" and " />
                <Span text="Privacy Policy" class="text-[#54B469]" />
              </FormattedString>
            </Label>

            <FlexboxLayout class="justify-center items-center mt-4">
              <Label
                text="Don't have an account? "
                fontSize="20"
                class="text-[#575E6C]"
              />
              <Label
                text="Register"
                fontSize="20"
                class="text-[#54B469] font-medium"
                @tap="navigateToSignup"
              />
            </FlexboxLayout>
          </StackLayout>
          <!-- Terms -->
        </StackLayout>
        <!-- Form Fields-->
      </StackLayout>
    </RootLayout>
  </Page>
</template>

<style scoped></style>
