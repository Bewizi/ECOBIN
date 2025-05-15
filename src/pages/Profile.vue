<script lang="ts" setup>
import {
  Dialogs,
  DockLayout,
  FlexboxLayout,
  FormattedString,
  Label,
  Page,
  ScrollView,
  Span,
  StackLayout,
} from "@nativescript/core";
import { $navigateTo, defineComponent } from "nativescript-vue";
import Login from "~/Auth/Login.vue";
import BottomTabs from "~/components/BottomTabs.vue";

defineComponent({
  name: "Profile",
});

const logout = () => {
  $navigateTo(Login);
  Dialogs.confirm({
    message: "Are You Sure You want To Logout",
    cancelButtonText: "No",
    okButtonText: "Yes",
    neutralButtonText: "Cancel",
  });
};
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout>
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-6">
          <!-- profile picture -->
          <FlexboxLayout class="flex-col justify-center items-center">
            <Label
              class="w-[50px] h-[50px] border-2 border-black rounded-full"
            />
            <Label
              text="Full Name"
              fontSize="20"
              class="mt-2 font-semibold text-black"
            />
          </FlexboxLayout>
          <!-- profile picture -->

          <!-- Main Warpper Container -->
          <StackLayout class="mt-10">
            <!-- Edit Profile -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf007;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Edit Profile" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Edit Profile -->

            <!-- Pefromance Stats -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf201;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Performance Stats" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Pefromance Stats -->

            <!-- Achievements -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf559;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Badges or Achievements" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Achievements -->

            <!-- Settings -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf013;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Settings" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Settings -->

            <!-- Languages -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf1ab;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Language" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Languages -->

            <!-- About Us -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf06a;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="About Us" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- About Us -->

            <!-- Logout -->
            <StackLayout class="bg-gray-100 rounded-2xl p-4 mb-5" @tap="logout">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa text-red-500" text="&#xf2f5;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Logout" />
                  </FormattedString>
                </Label>
              </FlexboxLayout>
            </StackLayout>
            <!-- Logout -->
          </StackLayout>
          <!-- Main Warpper Container -->
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
