<script lang="ts" setup>
import {
  Button,
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
import { Toast } from "~/services/toast_service";
import { colors } from "~/utils/colors";
import { navigate } from "~/utils/navigation";

defineComponent({
  name: "Profile",
});

const logout = () => {
  navigate(Login);
  Toast.showSuccess("Logout Successful");
};
</script>

<template>
  <Page actionBarHidden="true">
    <DockLayout>
      <BottomTabs />

      <ScrollView>
        <StackLayout class="pt-10 px-6">
          <!-- profile picture -->
          <FlexboxLayout class="space-x-10 items-center">
            <Label
              class="w-[100px] h-[100px] border-2 border-black rounded-full"
            />

            <StackLayout>
              <!-- USERSNAME -->
              <Label
                text="Toluwalase Bewaji"
                fontSize="32"
                class="mb-2 font-semibold text-black"
              />
              <!-- USERSNAME -->

              <!-- Green Hero -->
              <FlexboxLayout class="space-x-5 items-center">
                <Label fontSize="16">
                  <FormattedString>
                    <Span class="fa text-[#3FA45A]" text="&#xf058;" />
                    <Span text=" " />
                    <Span text=" " />
                    <Span text=" " />
                    <Span
                      text="Green Hero"
                      class="text-[#3FA45A] font-medium"
                    />
                    text="Green Hero" />
                  </FormattedString>
                </Label>
                <!-- Green Hero -->

                <!-- Location -->
                <Label fontSize="16">
                  <FormattedString>
                    <Span class="fa text-[#1C202A] ml-2" text="&#xf3c5;" />
                    <Span text=" " />
                    <Span text=" " />
                    <Span text=" " />
                    <Span
                      class="text-[#1C202A] font-medium"
                      text="Ibadan, Nigeria"
                    />
                  </FormattedString>
                </Label>
                <!-- Location -->
              </FlexboxLayout>
            </StackLayout>
          </FlexboxLayout>
          <!-- profile picture -->

          <!-- Main Warpper Container -->
          <StackLayout class="mt-10">
            <!-- Edit Profile -->
            <FlexboxLayout class="justify-between mb-10 gap-4 items-center">
              <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
                <!-- icon -->
                <Label class="text-[#575E6C] mb-4" fontSize="16 ">
                  <FormattedString>
                    <Span class="fa" text="&#xf1f8;" />
                    <Span text="  " />
                    <Span text=" " />
                    <Span text="Total Recycled" />
                  </FormattedString>
                </Label>
                <!-- icon -->

                <!-- text -->
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span text="23KG " />
                    <Span
                      fontSize="14"
                      class="text-[#747C8D]"
                      text="this month"
                    />
                  </FormattedString>
                </Label>
                <!-- text -->
              </StackLayout>

              <StackLayout class="bg-[#F5F7FA] rounded-2xl p-8">
                <!-- icon -->
                <Label class="text-[#575E6C]" fontSize="16 ">
                  <FormattedString>
                    <Span class="fa" text="&#xf00c;" />
                    <Span text="  " />
                    <Span text=" " />
                    <Span text="Pickups Completed" />
                  </FormattedString>
                </Label>
                <!-- icon -->

                <!-- text -->
                <Label text="4 pickups" fontSize="20" class="text-black mt-2">
                </Label>
                <!-- text -->
              </StackLayout>
            </FlexboxLayout>
            <!-- Edit Profile -->

            <!-- Preferences -->
            <!-- Label -->
            <Label
              text="Preferences"
              fontSize="20"
              class="text-black font-medium mb-4"
            />
            <!-- Label -->
            <StackLayout class="mb-10 border-2 border-[#C1C8D6] rounded-xl p-4">
              <FlexboxLayout class="items-center justify-between">
                <Label fontSize="16" class="text-[#1C202A]" textWrap="true">
                  <FormattedString>
                    <Span class="fa text-black" text="&#xf3c5;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="10 block, Majek Estate, Ibafo, \n" />
                    <Span text="Lagos State" />
                  </FormattedString>
                </Label>

                <!-- Edit button -->
                <Label fontSize="16" class="text-[#575E6C]">
                  <FormattedString>
                    <Span class="fa" text="&#xf304;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Edit" />
                  </FormattedString>
                </Label>
                <!-- Edit button -->
              </FlexboxLayout>
              <!-- Label -->

              <!-- Label -->
              <FlexboxLayout class="items-center justify-between mt-5">
                <Label fontSize="16" class="text-[#1C202A]" textWrap="true">
                  <FormattedString>
                    <Span class="fa text-black" text="&#xf073;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="9 AM - Thursays" />
                  </FormattedString>
                </Label>

                <!-- Change button -->
                <Label fontSize="16" class="text-[#575E6C]">
                  <FormattedString>
                    <Span text="Change" />
                  </FormattedString>
                </Label>
                <!-- Change button -->
              </FlexboxLayout>
            </StackLayout>
            <!-- Preferences -->

            <!-- App Settings -->
            <StackLayout class="mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf013;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="App Settings" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- App Settings -->

            <!-- Help and Supports -->
            <StackLayout class="mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf1ab;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Help & Support" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Help and Supports -->

            <!-- Terms & Privacy -->
            <StackLayout class="mb-5">
              <FlexboxLayout class="justify-between">
                <Label fontSize="20" class="text-black">
                  <FormattedString>
                    <Span class="fa" text="&#xf06a;" />
                    <Span text="  " />
                    <Span text="  " />
                    <Span text="Terms & Privacy" />
                  </FormattedString>
                </Label>
                <Label
                  fontSize="20"
                  class="fa text-[#585E6D]"
                  text="&#xf054;"
                />
              </FlexboxLayout>
            </StackLayout>
            <!-- Terms & Privacy -->

            <!-- Logout -->
            <StackLayout class="mb-5" @tap="logout">
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

          <StackLayout class="mt-10">
            <Button text="Pickup History" :class="`${colors.button.primary}`" />
            <Button
              text="View Activity"
              :class="`${colors.button.secondary}`"
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </DockLayout>
  </Page>
</template>

<style scoped></style>
