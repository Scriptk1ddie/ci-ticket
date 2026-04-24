import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Textarea } from "@/components/ui/textarea"

const departments = [
  "Production",
  "Maintenance",
  "Quality",
  "Logistics",
  "IT",
  "Engineering",
  "Warehouse",
  "HR",
  "Finance",
  "Purchasing",
  "Sales",
  "Customer Support",
  "Health & Safety",
  "Management",
] as const

const categorys = [
  "Safety",
  "Quality",
  "Work Environment",
  "Incident",
  "Process",
  "Equipment",
  "IT / Software",
  "Work Instructions",
  "Improvement",
  "Other",
] as const

export function Ticket() {
  const anchor = useComboboxAnchor()

  return (
    <>
      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="">
              Create an Continous Improvement idea
            </CardTitle>
            <CardDescription>
              Enter your details & idea below to submit a ticket
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="employeeid">Employee ID</Label>
                  </div>
                  <Input id="eployeeid" type="text" pattern="[0-9]" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="firstname">First name</Label>
                  </div>
                  <Input id="firstname" type="text" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="lastname">Last name</Label>
                  </div>
                  <Input id="lastname" type="text" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="department">Department</Label>
                  </div>
                  <Combobox items={departments} id="department" required>
                    <ComboboxInput placeholder="Select your department" />
                    <ComboboxContent>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="idea">Improvement idea</Label>
                  </div>
                  <Textarea
                    placeholder="Type your idea here."
                    id="idea"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <p className="text-xs italic">You can select multiple</p>
                  </div>
                  <Combobox multiple autoHighlight items={categorys} required>
                    <ComboboxChips ref={anchor}>
                      <ComboboxValue>
                        {(values) => (
                          <>
                            {values.map((value: string) => (
                              <ComboboxChip key={value}>{value}</ComboboxChip>
                            ))}
                            <ComboboxChipsInput />
                          </>
                        )}
                      </ComboboxValue>
                    </ComboboxChips>
                    <ComboboxContent anchor={anchor}>
                      <ComboboxEmpty>No items found.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Submit ticket
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Ticket
