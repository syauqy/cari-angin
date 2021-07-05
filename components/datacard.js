import React from 'react'
import {
    Container,
    Button,
    Stack,
    Avatar,
    Divider,
    Heading,
    Select,
    Input,
    Icon,
    Textarea,
    Box,
    Tag,
    TagLabel,
    Text,
    Badge,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
// import { ArrowBackIcon } from '@chakra-ui/icons'

import {trigger} from 'swr'



export default function DataCard(data) {
    // console.log(data)

    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <div>
            <Box
                key={data.id}
                maxW="xl"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="sm"
                // onClick={onOpen} style={{cursor: "pointer"}}
                >
                <Stack direction="column" spacing={2}>
                    <Box p={4}>
                    <Tag size="md" colorScheme="cyan" borderRadius="10" mb={2}><TagLabel>{data.data.fields.region}</TagLabel></Tag>
                    {data.data.fields.link ? 
                    <Link href={data.data.fields.link} isExternal>
                        <Text fontSize="lg" fontWeight="semibold" mb={2}>{data.data.fields.name ? data.data.fields.name : '-'} {' '}<ExternalLinkIcon mx="2px" /> </Text>
                    </Link>
                    : <Text fontSize="lg" fontWeight="semibold" mb={2}>{data.data.fields.name ? data.data.fields.name : '-'}</Text>}
                        
                        <Stack direction="row" mb={2}>
                        <Text>📞 </Text><Text fontSize="md" fontWeight={600} color="gray.500" ml={2}>{data.data.fields.contact ? data.data.fields.contact : '-'}</Text></Stack>
                        <Text fontSize="sm" color="gray.500">{data.data.fields.address ? data.data.fields.address : 'informasi alamat tidak ditemukan'}</Text>
                        {/* {data.data.fields.service ? <Badge colorScheme="green" isTruncated>{data.data.fields.service}</Badge> : <div></div>} */}
                    </Box>
                </Stack>
            </Box>


            {/* <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
                <DrawerOverlay>
                    <DrawerContent>
                        <Badge p={4} fontSize="0.8em" onClick={() => {onClose()}} style={{cursor: "pointer"}}><ArrowBackIcon w={4} h={4} /> Kembali</Badge>
                        <DrawerHeader><Text>{data.data.region.full_name}</Text> 
                        <Text color="gray.500" fontWeight={400} fontSize='sm'>{format(parseISO(data.data.date), 'dd MMMM yyyy', {locale: id})}</Text></DrawerHeader>
                        <DrawerBody>
                        <StoryModal data={data.data} />
                            <form onSubmit={formik.handleSubmit}>
                                <div className="form-body">
                                        <Box>
                                        <Text mb={2} color="gray.500" fontWeight={600}>Tanggal</Text>
                                            <Input
                                                mb={2}
                                                id="tanggal"
                                                name="tanggal"
                                                type="date"
                                                onChange={formik.handleChange}
                                                value={formik.values.date}/>
                                        </Box>
                                       
                                        <Box>
                                            <Text htmlFor="size_20" mb={2} color="gray.500" fontWeight={600}>Size 20</Text>
                                            <Input
                                                mb={2}
                                                id="size_20"
                                                name="size_20"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_20}/>
                                            <Text htmlFor="size_30" mb={2} color="gray.500" fontWeight={600}>Size 30</Text>
                                            <Input
                                                mb={2}
                                                id="size_30"
                                                name="size_30"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_30}/>
                                            <Text htmlFor="size_40" mb={2} color="gray.500" fontWeight={600}>Size 40</Text>
                                            <Input
                                                mb={2}
                                                id="size_40"
                                                name="size_40"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_40}/>
                                            <Text htmlFor="size_50" mb={2} color="gray.500" fontWeight={600}>Size 50</Text>
                                            <Input
                                                mb={2}
                                                id="size_50"
                                                name="size_50"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_50}/>
                                            <Text htmlFor="size_60" mb={2} color="gray.500" fontWeight={600}>Size 60</Text>
                                            <Input
                                                mb={2}
                                                id="size_60"
                                                name="size_60"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_60}/>
                                            <Text htmlFor="size_70" mb={2} color="gray.500" fontWeight={600}>Size 70</Text>
                                            <Input
                                                mb={2}
                                                id="size_70"
                                                name="size_70"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_70}/>
                                            <Text htmlFor="size_80" mb={2} color="gray.500" fontWeight={600}>Size 80</Text>
                                            <Input
                                                mb={2}
                                                id="size_80"
                                                name="size_80"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_80}/>
                                            <Text htmlFor="size_90" mb={2} color="gray.500" fontWeight={600}>Size 90</Text>
                                            <Input
                                                mb={2}
                                                id="size_90"
                                                name="size_90"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_90}/>
                                            
                                        </Box>
                                        <Box>
                                        <Text htmlFor="size_100" mb={2} color="orange.500" fontWeight={800}>Size 100 *wajib diisi </Text>
                                            <Input
                                                mb={2}
                                                id="size_100"
                                                name="size_100"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.size_100}/> {formik.touched.size_100 && formik.errors.size_100
                                                ? <Text mb={2} color="red.500" fontWeight={400} fontSize='xs'>{formik.errors.size_100}</Text>
                                                : null}
                                            <Text htmlFor="size_110" mb={2} color="gray.500" fontWeight={600}>Size 110</Text>
                                            <Input
                                                mb={2}
                                                id="size_110"
                                                name="size_110"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_110}/>
                                            <Text htmlFor="size_120" mb={2} color="gray.500" fontWeight={600}>Size 120</Text>
                                            <Input
                                                mb={2}
                                                id="size_120"
                                                name="size_120"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_120}/>
                                            <Text htmlFor="size_130" mb={2} color="gray.500" fontWeight={600}>Size 130</Text>
                                            <Input
                                                mb={2}
                                                id="size_130"
                                                name="size_130"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_130}/>
                                            <Text htmlFor="size_140" mb={2} color="gray.500" fontWeight={600}>Size 140</Text>
                                            <Input
                                                mb={2}
                                                id="size_140"
                                                name="size_140"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_140}/>
                                            <Text htmlFor="size_150" mb={2} color="gray.500" fontWeight={600}>Size 150</Text>
                                            <Input
                                                mb={2}
                                                id="size_150"
                                                name="size_150"
                                                type="number"
                                                placeholder="Dalam Rp"
                                                onChange={formik.handleChange}
                                                value={formik.values.size_150}/>
                                            <Text htmlFor="remark" mb={2} color="gray.500" fontWeight={600}>Catatan</Text>
                                                <Textarea
                                        mb={2}
                                        rows="5"
                                        id="remark"
                                        name="remark"
                                        placeholder="isi catatan anda di sini"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.remark ? formik.values.remark : ''}/>
                                    
                                        </Box>

                                </div>
                                
                                <Button
                                    mb={2}
                                    mt={2}
                                    isFullWidth
                                    colorScheme="blue"
                                    size="lg"
                                    aria-label="submit entry"
                                    onClick={() => {
                                    onClose()
                                }}
                                    type="submit">Ubah Harga</Button>
                                    <HapusData harga={data} />
                            </form>
                        </DrawerBody>
                    </DrawerContent>

                </DrawerOverlay>
            </Drawer> */}
        </div>
    )
}
