import * as React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import { Home, User, Settings as SettingsIcon, Bell, Search, Plus, Trash } from 'lucide-react-native';

// Core
import { Button } from '../components/core/Button';
import { IconButton } from '../components/core/IconButton';
import { Input } from '../components/core/Input';
import { Text } from '../components/core/Text';
import { Toggle } from '../components/core/Toggle';
import { Checkbox } from '../components/core/Checkbox';
import { RadioGroup, RadioGroupItem } from '../components/core/RadioGroup';
import { TextArea } from '../components/core/TextArea';
import { Select } from '../components/core/Select';
import { Modal } from '../components/core/Modal';
import { Avatar } from '../components/core/Avatar';
import { Badge } from '../components/core/Badge';
import { Divider } from '../components/core/Divider';
import { Chip } from '../components/core/Chip';
import { Stepper } from '../components/core/Stepper';
import { Snackbar } from '../components/core/Snackbar';

// Layout
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/layout/Card';
import { Grid } from '../components/layout/Grid';
import { Stack } from '../components/layout/Stack';
import { SectionHeader } from '../components/layout/SectionHeader';
import { Tabs } from '../components/layout/Tabs';
import { Accordion } from '../components/layout/Accordion';
import { BottomSheet } from '../components/layout/BottomSheet';

// Data Display
import { List } from '../components/data-display/List';
import { Carousel } from '../components/data-display/Carousel';
import { Table } from '../components/data-display/Table';
import { Progress } from '../components/data-display/Progress';
import { EmptyState } from '../components/data-display/EmptyState';
import { HorizontalCards } from '../components/HorizontalCards';

// Interaction
import { SearchBar } from '../components/interaction/SearchBar';

// Charts
import { LineChartWrapper, BarChartWrapper, PieChartWrapper } from '../components/charts/ChartWrappers';

// Auth
import { LoginForm } from '../components/auth/LoginForm';

// Notification
import { NotificationList } from '../components/notification/NotificationList';

// Admin
import { TenantSwitcher } from '../components/admin/TenantSwitcher';

// Settings
import { ProfileCard } from '../components/settings/ProfileCard';

export default function GalleryScreen() {
    const [toggleValue, setToggleValue] = React.useState(false);
    const [checkboxValue, setCheckboxValue] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState('option1');
    const [selectValue, setSelectValue] = React.useState('opt1');
    const [modalVisible, setModalVisible] = React.useState(false);
    const [stepperValue, setStepperValue] = React.useState(1);
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState('tab1');
    const [bottomSheetVisible, setBottomSheetVisible] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const selectOptions = [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' },
        { label: 'Option 3', value: 'opt3' },
    ];

    const accordionItems = [
        { title: 'Item 1', content: <Text>Content for item 1</Text> },
        { title: 'Item 2', content: <Text>Content for item 2</Text> },
    ];

    const listData = [
        { id: '1', title: 'List Item 1', subtitle: 'Subtitle 1', left: <User size={20} color="#000" /> },
        { id: '2', title: 'List Item 2', subtitle: 'Subtitle 2', left: <SettingsIcon size={20} color="#000" /> },
    ];

    const carouselData = [1, 2, 3, 4, 5];

    const tableHeaders = ['Name', 'Role', 'Status'];
    const tableData = [
        { name: 'John Doe', role: 'Admin', status: 'Active' },
        { name: 'Jane Smith', role: 'User', status: 'Inactive' },
    ];

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{ data: [20, 45, 28, 80, 99, 43] }]
    };

    const pieData = [
        { name: "Seoul", population: 21500000, color: "rgba(131, 167, 234, 1)", legendFontColor: "#7F7F7F", legendFontSize: 15 },
        { name: "Toronto", population: 2800000, color: "#F00", legendFontColor: "#7F7F7F", legendFontSize: 15 },
        { name: "Beijing", population: 527612, color: "red", legendFontColor: "#7F7F7F", legendFontSize: 15 },
    ];

    const notifications = [
        { id: '1', title: 'New Message', message: 'You have a new message from John', type: 'message', time: '2m ago' },
        { id: '2', title: 'System Alert', message: 'Server maintenance scheduled', type: 'alert', time: '1h ago' },
    ];

    const tenants = [
        { id: '1', name: 'Acme Corp', plan: 'Enterprise' },
        { id: '2', name: 'Startup Inc', plan: 'Pro' },
    ];
    const [activeTenant, setActiveTenant] = React.useState('1');

    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    };

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ padding: 16, gap: 24 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0f172a' }}>Component Gallery</Text>

                <SectionHeader title="UI Components" subtitle="Explore our component library" />
                
                {/* Horizontal Cards Component */}
                <HorizontalCards />
                
                {/* Search Bar */}
                <SearchBar 
                    value={searchValue}
                    onChangeText={setSearchValue}
                    placeholder="Search components..."
                />

                <View style={{ gap: 16 }}>
                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Button Variants</Text>
                        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                            <Button variant="default">Default</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="link">Link</Button>
                            <Button size="sm">Small</Button>
                            <Button size="icon"><Plus size={20} color="#fff" /></Button>
                            <Button loading>Loading</Button>
                        </View>
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Icon Buttons</Text>
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <IconButton icon={Bell} />
                            <IconButton icon={Trash} variant="destructive" />
                            <IconButton icon={SettingsIcon} variant="outline" />
                        </View>
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Inputs</Text>
                        <Input placeholder="Default Input" />
                        <Input label="With Label" placeholder="Enter text" />
                        <Input label="With Error" error="This field is required" />
                        <TextArea label="Text Area" placeholder="Enter description" />
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Controls</Text>
                        <Toggle label="Toggle Switch" checked={toggleValue} onCheckedChange={setToggleValue} />
                        <Checkbox label="Checkbox" checked={checkboxValue} onCheckedChange={setCheckboxValue} />
                        <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                            <RadioGroupItem value="option1" label="Option 1" />
                            <RadioGroupItem value="option2" label="Option 2" />
                        </RadioGroup>
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Select</Text>
                        <Select
                            label="Select Option"
                            options={selectOptions}
                            value={selectValue}
                            onValueChange={setSelectValue}
                        />
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Stepper</Text>
                        <Stepper value={stepperValue} onValueChange={setStepperValue} />
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Badges & Chips</Text>
                        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
                            <Badge>Default</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="destructive">Destructive</Badge>
                            <Badge variant="outline">Outline</Badge>
                            <Chip label="Chip" />
                            <Chip label="With Icon" icon={User} />
                            <Chip label="Closable" onClose={() => { }} />
                        </View>
                    </View>

                    <View style={{ gap: 8 }}>
                        <Text style={{ fontWeight: '600' }}>Avatar</Text>
                        <View style={{ flexDirection: 'row', gap: 8 }}>
                            <Avatar src="https://github.com/shadcn.png" alt="@shadcn" />
                            <Avatar fallback="JD" />
                        </View>
                    </View>

                    <View style={{ gap: 8 }}>
                        <Button onPress={() => setModalVisible(true)}>Open Modal</Button>
                        <Button onPress={() => setSnackbarVisible(true)}>Show Snackbar</Button>
                    </View>
                </View>

                <SectionHeader title="Layout Components" />
                <View style={{ gap: 16 }}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Text>Card Content goes here.</Text>
                        </CardContent>
                        <CardFooter>
                            <Button style={{ width: '100%' }}>Action</Button>
                        </CardFooter>
                    </Card>

                    <Tabs
                        tabs={[
                            { label: 'Tab 1', value: 'tab1' },
                            { label: 'Tab 2', value: 'tab2' },
                        ]}
                        activeTab={activeTab}
                        onTabChange={setActiveTab}
                    />

                    <Accordion items={accordionItems} />

                    <Button onPress={() => setBottomSheetVisible(true)}>Open Bottom Sheet</Button>
                </View>

                <SectionHeader title="Data Display" />
                <List
                    data={listData}
                    renderItem={({ item }) => (
                        <View className="p-4 border-b border-slate-100 flex-row items-center gap-4">
                            {item.left}
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />

                <View style={{ gap: 8 }}>
                    <Text style={{ fontWeight: '600', marginBottom: 8 }}>Carousel</Text>
                    <Carousel
                        data={carouselData}
                        itemWidth={150}
                        renderItem={({ item }) => (
                            <View style={{ height: 128, backgroundColor: '#e2e8f0', borderRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
                                <Text>Item {item}</Text>
                            </View>
                        )}
                    />
                </View>

                <View style={{ gap: 8, marginTop: 16 }}>
                    <Text style={{ fontWeight: '600' }}>Table</Text>
                    <Table headers={tableHeaders} data={tableData} />
                </View>

                <View style={{ gap: 8, marginTop: 16 }}>
                    <Text style={{ fontWeight: '600' }}>Progress</Text>
                    <Progress value={60} />
                </View>

                <View style={{ gap: 8, marginTop: 16 }}>
                    <Text style={{ fontWeight: '600' }}>Empty State</Text>
                    <EmptyState
                        icon={Search}
                        title="No results found"
                        description="Try adjusting your search terms"
                    />
                </View>

                <SectionHeader title="Interaction" />
                <SearchBar value={searchValue} onChangeText={setSearchValue} />

                <SectionHeader title="Charts" />
                <LineChartWrapper data={chartData} title="Line Chart" />
                <BarChartWrapper data={chartData} title="Bar Chart" />
                <PieChartWrapper data={pieData} title="Pie Chart" />

                <SectionHeader title="Authentication" />
                <LoginForm
                    onSubmit={(creds) => console.log(creds)}
                    onForgotPassword={() => { }}
                    onRegister={() => { }}
                />

                <SectionHeader title="Notification" />
                <NotificationList notifications={notifications} />

                <SectionHeader title="Admin" />
                <TenantSwitcher
                    tenants={tenants}
                    activeTenantId={activeTenant}
                    onTenantChange={setActiveTenant}
                />

                <SectionHeader title="Settings" />
                <ProfileCard
                    user={user}
                    onSettings={() => { }}
                    onLogout={() => { }}
                />

                {/* Modals */}
                <Modal
                    visible={modalVisible}
                    onClose={() => setModalVisible(false)}
                    title="Example Modal"
                >
                    <Text>This is a modal content.</Text>
                    <Button className="mt-4" onPress={() => setModalVisible(false)}>Close</Button>
                </Modal>

                <BottomSheet
                    visible={bottomSheetVisible}
                    onClose={() => setBottomSheetVisible(false)}
                    title="Bottom Sheet"
                >
                    <Text>This is bottom sheet content.</Text>
                    <Button className="mt-4" onPress={() => setBottomSheetVisible(false)}>Close</Button>
                </BottomSheet>

                <Snackbar
                    visible={snackbarVisible}
                    message="This is a snackbar message"
                    action="Undo"
                    onClose={() => setSnackbarVisible(false)}
                />

                <View style={{ height: 80 }} />
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
            <List
                data={[{ id: '1' }]}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 24 }}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}
