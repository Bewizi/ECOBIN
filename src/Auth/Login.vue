<script setup lang="ts">
import {
  FlexboxLayout,
  FormattedString,
  Label,
  RootLayout,
  Span,
  StackLayout,
  TextField,
} from "@nativescript/core";

import { ref } from "nativescript-vue";
import Home from "~/pages/Home.vue";
import api from "~/services/api_service";
import SignUp from "./SignUp.vue";
import { navigate } from "~/utils/navigation";
import { Toast } from "~/services/toast_service";

const showPassword = ref<boolean>(false);
const isLoading = ref<boolean>(false);

const form = ref({
  email: "",
  password: "",
});

const errors = ref<Record<string, string>>({
  email: "",
  password: "",
});

const handleFormSubmit = async () => {
  isLoading.value = true;
  errors.value = { email: "", password: "" };

  try {
    console.log("Form Submitted", form.value);

    const response = await api.auth.login({
      email: form.value.email,
      password: form.value.password,
    });

    if (response.status === 200) {
      await Toast.showSuccess("Login Successful");
      // console.log("Login Successful");
      navigate(Home, { clearHistory: true });

      form.value.email = "";
      form.value.password = "";
    }
  } catch (error: any) {
    console.error("Login Failed", error);

    if (typeof error === "object" && error !== null) {
      const apiError = error as {
        status?: number;
        message?: string;
        errors?: Record<string, string>;
      };

      if (apiError.errors) {
        errors.value = {
          ...errors.value,
          ...apiError.errors,
        };
      }

      const errorMessage =
        apiError.message || "Login failed. Please try again.";
      await Toast.showError(errorMessage);
    } else {
      await Toast.showError("An unexpected error occurred");
    }
  } finally {
    isLoading.value = false;
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
          <Label text="Log in" fontSize="24" class="font-medium mb-5" />
          <Label textWrap="true" class="" fontSize="14" lineHeight="5">
            <FormattedString>
              <Span text="Welcome back" />
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
            fontSize="16"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798] placeholder:text-[16px]"
            :class="errors.email ? 'border-red-500' : 'border-[#C1C8D6]'"
          />
          <Label
            v-if="errors.email"
            :text="errors.email"
            class="text-red-500 mb-2"
          />
          <!-- Email Address -->

          <!-- Password -->
          <Label text="Password" class="text-black mb-2" fontSize="20" />
          <FlexboxLayout
            class="justify-between items-center mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl"
            :class="errors.password ? 'border-red-500' : 'border-[#C1C8D6]'"
          >
            <TextField
              v-model="form.password"
              :secure="!showPassword"
              hint="Enter your password"
              fontSize="16"
              class="flex-grow placeholder:text-[#7E8798] placeholder:text-[16px]"
            />
            <Label
              @tap="togglePasswordVisibility"
              fontSize="20"
              class="fa text-[#7E8798]"
              :text="showPassword ? '&#xf070;' : '&#xf06e;'"
            />
          </FlexboxLayout>
          <Label
            v-if="errors.password"
            :text="errors.password"
            class="text-red-500 mb-3 text-sm"
          />

          <Button
            :isEnabled="!isLoading"
            class="bg-[#54B469] text-white py-5 rounded-xl"
            @tap="handleFormSubmit"
          >
            <FormattedString>
              <Span
                fontSize="16"
                v-if="!isLoading"
                text="Login"
                class="text-white font-medium"
              />

              <Span
                v-else
                text="&#xf110;"
                class="fa text-white spin-animation"
                fontSize="20"
              />
            </FormattedString>
          </Button>

          <!-- Terms -->
          <StackLayout>
            <Label
              lineHeight="5"
              fontSize="16"
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
                fontSize="16"
                class="text-[#575E6C]"
              />
              <Label
                text="Register"
                fontSize="16"
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

<style scoped>
.spin-animation {
  animation-name: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
