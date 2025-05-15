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
import { $showModal } from "nativescript-vue";

import { $closeModal, $navigateTo, ref } from "nativescript-vue";
import SuccessModal from "~/components/modal/SuccessModal.vue";
import Home from "~/pages/Home.vue";
import Setup from "~/pages/Setup.vue";
// import { register } from "~/utils/httpClient";
import api from "~/services/api_service";
import { navigate } from "~/utils/navigation";
import Login from "./Login.vue";
import { Toast } from "~/services/toast_service";

const completeSetup = () => {
  $navigateTo(Home, { clearHistory: true });
};

const skipForNow = () => {
  $navigateTo(Home, { clearHistory: true });
  $closeModal;
};

const showPassword = ref<boolean>(false);

const form = ref({
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
  password: "",
});

const errors = ref<Record<string, string>>({});

const handleFormSubmit = async () => {
  try {
    console.log("Form Submitted", form.value);

    const respone = await api.auth.register({
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      phoneNumber: form.value.phoneNumber,
      email: form.value.email,
      password: form.value.password,
    });

    if (respone.status === 201) {
      console.log("Registration Successful", respone);
      await Toast.showSuccess("Registration Successful");

      form.value.firstname = "";
      form.value.lastname = "";
      form.value.email = "";
      form.value.phoneNumber = "";
      form.value.password = "";

      const viewModal = () => {
        $showModal(SuccessModal, {
          fullscreen: false,
          animated: true,
          stretched: true,
          transition: {
            name: "fade",
            duration: 300,
            curve: "easeIn",
          },
          props: {
            completeSetup,
            skipForNow,
          },
        });
      };

      viewModal();
    }
  } catch (error) {
    console.log("Registration Failed", error);
    await Toast.showError("Registration Failed");
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const navigateToSignup = () => {
  navigate(Login);
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
          <!-- Fist Name -->
          <Label text="First Name" class="text-black mb-2" fontSize="20" />
          <TextField
            v-model="form.firstname"
            hint="Enter your full name"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798]"
          />
          <!-- First Name -->

          <!-- Last Name -->
          <Label text="Last Name" class="text-black mb-2" fontSize="20" />
          <TextField
            v-model="form.lastname"
            hint="Enter your full name"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798]"
          />
          <!-- Last Name -->

          <!-- Email Address -->
          <Label text="Email Address" class="text-black mb-2" fontSize="20" />
          <TextField
            v-model="form.email"
            hint="Ecobin@gmail.com"
            keyboardType="email"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798]"
          />
          <!-- Email Address -->

          <!-- Phone Number -->
          <Label text="Phone Number" class="text-black mb-2" fontSize="20" />
          <TextField
            v-model="form.phoneNumber"
            hint="Enter your phone number"
            keyboardType="phone"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798]"
          />
          <!-- Phone Number -->

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
              fontSize="14"
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
                text="Have an account? "
                fontSize="20"
                class="text-[#575E6C]"
              />
              <Label
                text="Login"
                fontSize="20"
                class="text-[#54B469] font-medium"
                @tap="navigateToSignup"
              />
            </FlexboxLayout>
          </StackLayout>
        </StackLayout>
        <!-- Form Fields-->
      </StackLayout>
    </RootLayout>
  </Page>
</template>

<style scoped></style>
