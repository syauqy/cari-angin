import React, {useState} from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr'
import {
    Flex,
    Text,
    Container,
    Box,
    Divider,
    Heading,
    Stack,
    Input,
    Button,
    InputGroup, InputRightElement,
    Link,
    Center

} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import CariAnginImg from '../public/wind-face.png'
import DataCard from '../components/datacard'
import {useForm} from "react-hook-form";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {

    const [region,
        setRegion] = useState('')

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        setRegion(data.region)
    };

    const allData = useSWR(`https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_ID}?filterByFormula=SEARCH(LOWER(%22${region}%22)%2C+LOWER(region))`, (url) => fetcher(url, {
        headers: {
            'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
            'Accept': 'application/json'
        }
    }))
    if (allData.error) 
        return <div><Container
        w="100vw" h="100vh" maxW="lg" pt="8" pb="8"
                  >
                    <Center>
                      <Stack direction="column" spacing={2}>
                      <Image src={CariAnginImg} alt="pencari oksigen" w={200}/>
                  <Heading size="md" color="gray.600">Gagal mengambil data. Coba refresh ulang</Heading>
                      </Stack>
                    </Center>
                    
              </Container></div>
    if (!allData.data) {
        return <div>
          <Container
          w="100vw" h="100vh" maxW="lg" pt="8" pb="8"
                    >
                      <Center>
                        <Stack direction="column" spacing={2}>
                        <Image src={CariAnginImg} alt="pencari oksigen" w={200}/>
                    <Heading size="md" color="gray.600">Mohon tunggu..</Heading>
                        </Stack>
                      </Center>
                      
                </Container>
        </div>
    }


    const data = allData.data.records;
    console.log(allData)

    console.log('cari', region);

    return (
        <div className={styles.container}>
            <Head>
                <title>Cari Angin | Informasi penyedia oksigen</title>
                <meta
                    name="description"
                    content="Cari informasi lokasi penyedia oksigen di daerah Anda"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Container w="100vw" h="100vh" maxW="lg" pt="8" pb="8">
            <Heading mb={4} as="h1" size="xl" >Cari Angin 🌬️</Heading>
            <Text mb={4} mt={4} fontSize="md" >Dummy site dari <Link color="teal" isExternal href="https://oksigen.carrd.co/">Info Oxygen<ExternalLinkIcon mx="2px" /></Link>. Cari informasi mengenai penyedia tabung dan pengisian ulang oksigen di daerah Anda dengan menggunakan form pencarian di bawah ini.</Text>
                <Box m={4} ml={0} mr={0}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div>
                      <InputGroup size="md">
                      <Input {...register("region")}
                        pr="4.5rem"
                            placeholder="cari kota/kabupaten"
                            />
                            <InputRightElement width="4.5rem">
                            <Button type="submit" h="1.75rem" size="sm">Cari</Button>
                            </InputRightElement>
                            </InputGroup>
                      </div>
                    </form>
                </Box>
                <Box>
                    <Divider mb={4}/> 
                    <Text mb={4} mt={4}  fontSize="md" fontWeight={600} color="gray.600">Daftar penyedia tabung dan isi ulang oksigen di {region? <span style={{color : 'teal'}}>{region}</span> : 'semua daerah'}</Text>
                    <Box
                        maxH={600}>
                        <Stack spacing={4} direction="column" overflow="scroll" borderWidth="1px" borderRadius="lg" p={2}>
                            {allData.data.records.length !== 0
                                ? data.map((d) => {
                                    return (<DataCard data={d} key={d.id}/>)
                                })
                                : <Box align="center" p={2}>
                                  <Heading as="h3" size="xl">😥</Heading> 
                                <Text size="md">Data tidak ditemukan, coba cari kembali untuk daerah lainnya.</Text></Box>}
                        </Stack>
                    </Box>
                </Box>
                <Divider mb={4}/> 
            <Text mb={4} mt={4} fontSize="md">Project ini terbuka untuk siapapun yang ingin berkontribusi. <Link color="teal" isExternal href="https://github.com/syauqy/cari-angin">Lihat repo<ExternalLinkIcon mx="2px" /></Link></Text>
            </Container>
            
        </div>
    )
}
