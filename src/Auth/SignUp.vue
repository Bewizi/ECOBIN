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
import Setup from "~/pages/Setup.vue";

const showPassword = ref<boolean>(false);

const form = ref({
  fullname: "",
  email: "",
  phone: "",
  password: "",
});

const handleFormSubmit = () => {
  try {
    console.log("Form Submitted", form.value);
    form.value.fullname = "";
    form.value.email = "";
    form.value.phone = "";
    form.value.password = "";

    Dialogs.confirm({
      title: "Success! You're Almost There 🎉",
      message:
        "Thanks for signing up. Let's set up your account so we can tailor your EcoBin experience to you!",
      cancelButtonText: "Skip for Now",
      okButtonText: "Complete Setup",
    }).then((result) => {
      if (result) {
        $navigateTo(Setup);
      } else {
        $navigateTo(Home, { clearHistory: true });
      }
    });
  } catch (error) {
    console.log("Error to Signup", error);
    console.error("Error:", error);
  }
};

// const password = ref("");

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
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
          <!-- Full Name -->
          <Label text="Full Name" class="text-black mb-2" fontSize="20" />
          <TextField
            v-model="form.fullname"
            hint="Enter your full name"
            class="mb-4 p-4 border-2 border-[#C1C8D6] rounded-xl placeholder:text-[#7E8798]"
          />
          <!-- Full Name -->

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
            v-model="form.phone"
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
        </StackLayout>
        <!-- Form Fields-->
      </StackLayout>
    </RootLayout>
  </Page>
</template>

<style scoped></style>
