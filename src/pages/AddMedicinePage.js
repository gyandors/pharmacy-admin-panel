import AddMedicineForm from '../components/Medicines/AddMedicineForm';

export default function AddMedicinePage() {
  document.title = 'Admin Panel - Add Medicine';

  return (
    <main>
      <AddMedicineForm />
    </main>
  );
}
