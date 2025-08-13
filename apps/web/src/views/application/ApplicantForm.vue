<script lang="ts" setup>
import { reactive } from 'vue';
import { InputText, Divider, InputNumber, Calendar, Dropdown, Button } from 'primevue';

const form = reactive({
  firstName: '',
  lastName: '',
  householdCount: 1,
  householdMembers: [{ name: '', dob: null }],
  phone: '',
  email: '',
  address: {
    street: '',
    line2: '',
    city: '',
    state: '',
    zip: ''
  },
  homeOwnership: '',
  annualIncome: null
})

function updateHouseholdMembers() {
  const count = form.householdCount
  const current = form.householdMembers.length
  if (count > current) {
    for (let i = current; i < count; i++) {
      form.householdMembers.push({ name: '', dob: null })
    }
  } else if (count < current) {
    form.householdMembers.splice(count)
  }
}

function submitForm() {
  console.log('Form submitted:', JSON.parse(JSON.stringify(form)))
  // You can now send the data to an API or store it
}
</script>

<template>
  <div class="p-fluid p-4">
    <h2>Application Form</h2>

    <div class="p-field p-grid">
      <label for="firstName" class="p-col-12 p-md-2">First Name</label>
      <div class="p-col-12 p-md-10">
        <InputText id="firstName" v-model="form.firstName" />
      </div>
    </div>

    <div class="p-field p-grid">
      <label for="lastName" class="p-col-12 p-md-2">Last Name</label>
      <div class="p-col-12 p-md-10">
        <InputText id="lastName" v-model="form.lastName" />
      </div>
    </div>

    <Divider />

    <div class="p-field p-grid">
      <label for="householdCount" class="p-col-12 p-md-2">Household Size</label>
      <div class="p-col-12 p-md-10">
        <InputNumber inputId="householdCount" v-model="form.householdCount" :min="1" @input="updateHouseholdMembers" />
      </div>
    </div>

    <div v-for="(member, index) in form.householdMembers" :key="index" class="p-grid">
      <div class="p-col-12 p-md-6">
        <label :for="'memberName-' + index">Name</label>
        <InputText :id="'memberName-' + index" v-model="member.name" />
      </div>
      <div class="p-col-12 p-md-6">
        <label :for="'memberDob-' + index">DOB</label>
        <Calendar :id="'memberDob-' + index" v-model="member.dob" dateFormat="mm/dd/yy" showIcon />
      </div>
    </div>

    <Divider />

    <div class="p-field p-grid">
      <label for="phone" class="p-col-12 p-md-2">Phone</label>
      <div class="p-col-12 p-md-10">
        <InputText id="phone" v-model="form.phone" />
      </div>
    </div>

    <div class="p-field p-grid">
      <label for="email" class="p-col-12 p-md-2">Email</label>
      <div class="p-col-12 p-md-10">
        <InputText id="email" v-model="form.email" />
      </div>
    </div>

    <Divider />

    <h3>Address</h3>
    <div class="p-grid">
      <div class="p-col-12">
        <label for="street">Street Address</label>
        <InputText id="street" v-model="form.address.street" />
      </div>
      <div class="p-col-12">
        <label for="line2">Address Line 2</label>
        <InputText id="line2" v-model="form.address.line2" />
      </div>
      <div class="p-col-12 p-md-4">
        <label for="city">City</label>
        <InputText id="city" v-model="form.address.city" />
      </div>
      <div class="p-col-12 p-md-4">
        <label for="state">State</label>
        <InputText id="state" v-model="form.address.state" />
      </div>
      <div class="p-col-12 p-md-4">
        <label for="zip">Zipcode</label>
        <InputText id="zip" v-model="form.address.zip" />
      </div>
    </div>

    <Divider />

    <div class="p-field p-grid">
      <label for="ownership" class="p-col-12 p-md-2">Home Ownership</label>
      <div class="p-col-12 p-md-10">
        <Dropdown
          id="ownership"
          v-model="form.homeOwnership"
          :options="['Rent', 'Own']"
          placeholder="Select one"
        />
      </div>
    </div>

    <div class="p-field p-grid">
      <label for="income" class="p-col-12 p-md-2">Annual Income</label>
      <div class="p-col-12 p-md-10">
        <InputNumber inputId="income" v-model="form.annualIncome" mode="currency" currency="USD" locale="en-US" />
      </div>
    </div>

    <Button label="Submit" class="mt-3" @click="submitForm" />
  </div>
</template>
