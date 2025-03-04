<template>
  <div class="inventory-container">
    <div class="toolbar">
      <div class="date-range">
        <v-text-field
          v-model="fromDate"
          label="From Date"
          type="date"
          variant="outlined"
          density="compact"
        ></v-text-field>
        <v-text-field
          v-model="toDate"
          label="To Date"
          type="date"
          variant="outlined"
          density="compact"
        ></v-text-field>
      </div>
      <div class="search">
        <v-text-field
          v-model="searchKeyword"
          label="Search"
          variant="outlined"
          append-icon="mdi-magnify"
          @click:append="search"
          density="compact"
        ></v-text-field>
        <v-btn class="search-button" @click="search" density="compact">조회</v-btn>
      </div>
    </div>
    <div class="grid-container">
      <v-data-table :headers="headers" :items="items" class="elevation-1">
      </v-data-table>
    </div>
    <div class="footer">
      <v-btn class="excel-button" @click="exportToExcel" density="compact">엑셀</v-btn>
      <v-btn class="print-button" @click="printData" density="compact">출력</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inventory',
  data() {
    return {
      fromDate: '',
      toDate: '',
      searchKeyword: '',
      headers: [
        { title: '번호', key: 'id', align: 'start' },
        { title: '물품명', key: 'name' },
        { title: '규격', key: 'spec' },
        { title: '단위', key: 'unit' },
        { title: '수량', key: 'quantity' },
      ],
      items: [
        { id: 1, name: '물품1', spec: '규격1', unit: '개', quantity: 10 },
        { id: 2, name: '물품2', spec: '규격2', unit: '개', quantity: 20 },
        { id: 3, name: '물품3', spec: '규격3', unit: '개', quantity: 30 },
        { id: 4, name: '물품4', spec: '규격4', unit: '개', quantity: 40 },
        { id: 5, name: '물품5', spec: '규격5', unit: '개', quantity: 50 },
      ],
    };
  },
  methods: {
    search() {
      // implement logic to search data with date range and keyword
      console.log('Search:', this.fromDate, this.toDate, this.searchKeyword);
    },
    exportToExcel() {
      // implement logic to export data to excel
      console.log('Export to Excel');
    },
    printData() {
      // implement logic to print data
      console.log('Print Data');
    },
  },
};
</script>

<style scoped>
.inventory-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1200px; /* Added a max-width to control the horizontal size */
  margin: 0 auto; /* Center the component horizontally */
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
  gap: 10px;
}

.date-range {
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Allow items to wrap to the next line on smaller screens */
}

.search {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.search-button {
}

.grid-container {
  flex-grow: 1;
  padding: 10px;
  overflow: auto;
  width: 100%;
}

.footer {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  gap: 10px;
}
</style>
