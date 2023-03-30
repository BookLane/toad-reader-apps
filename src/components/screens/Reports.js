import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text, ScrollView } from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { IndexPath, Select, SelectItem } from '@ui-kitten/components'
import { i18n } from "inline-i18n"
import { Table, Row, Rows } from 'react-native-table-component'

import { safeFetch, getDataOrigin, getIdsFromAccountId, getReqOptionsWithAdditions } from "../../utils/toolbox"
import useRouterState from "../../hooks/useRouterState"

import AppHeader from "../basic/AppHeader"
import SafeLayout from "../basic/SafeLayout"
import HeaderIcon from "../basic/HeaderIcon"
import BackFunction from "../basic/BackFunction"
import CoverAndSpin from "../basic/CoverAndSpin"

const tableText = {
  padding: 10,
}

const styles = StyleSheet.create({
  error: {
    padding: 30,
    fontSize: 18,
  },
  tab: {
    marginHorizontal: 30,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
  },
  tableContainer: {
    marginBottom: 10,
    marginHorizontal: 30,
  },
  tableHeading: {
    fontSize: 16,
    marginVertical: 10,
  },
  tableHead: {
    backgroundColor: '#DDD',
  },
  tableHeadText: {
    ...tableText,
    textAlign: 'center',
  },
  tableText: {
    ...tableText,
  },
  tableCellNumber: {
    ...tableText,
    textAlign: 'right',
  },
  tableSummary: {
    textAlign: 'right',
    fontWeight: '600',
    marginVertical: 10,
  },
  select: {
    marginHorizontal: 30,
    marginBottom: 10,
    width: 300,
  },
})

const Reports = ({
  idps,
  accounts,
}) => {

  const [ info, setInfo ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState()
  const [ selectedTabIndex, setSelectedTabIndex ] = useState(new IndexPath(0))

  const accountId = Object.keys(accounts)[0]
  const { idpId } = getIdsFromAccountId(accountId)

  const { historyGoBackToLibrary } = useRouterState()

  useEffect(
    () => {
      ;(async () => {

        setError()
        setLoading(true)

        try {

          const result = await safeFetch(`${getDataOrigin(idps[idpId])}/reportsinfo`, getReqOptionsWithAdditions({
            headers: {
              "x-cookie-override": accounts[accountId].cookie,
            },
          }))

          if(result.status < 400) {
            setInfo(await result.json())
          } else {
            setError(result.statusText)
          }

          setLoading(false)

        } catch(err) {
          setError(err.message)
          setLoading(false)
        }

      })()
    },
    [ idps[idpId], accounts[accountId] ],
  )

  return (
    <SafeLayout>
      <BackFunction func={historyGoBackToLibrary} />
      <AppHeader
        title={i18n("Reports")}
        titleCentered={true}
        leftControl={
          <HeaderIcon
            iconName="md-arrow-back"
            onPress={historyGoBackToLibrary}
          />
        }
      />
      {!!error &&
        <Text style={styles.error}>
          {error}
        </Text>
      }
      {!error &&
        <View style={styles.container}>
          {info.length === 1 &&
            <Text style={styles.tab}>
              {info[0].tab}
            </Text>
          }
          {info.length > 1 &&
            <Select
              selectedIndex={selectedTabIndex}
              onSelect={setSelectedTabIndex}
              value={(info[selectedTabIndex.row] || {}).tab || 'Loading...'}
              style={styles.select}
            >
              {info.map(({ tab }) => (
                <SelectItem title={tab} key={tab} />
              ))}
            </Select>
          }

          <ScrollView style={styles.tabContent}>
            {((info[selectedTabIndex.row] || {}).data || []).map(({ heading, rows, summary }, idx) => {
              const flexArr = rows.length > 0 && Object.values(rows[0]).map(val => /^[-0-9\.$]*$/.test(val) ? 1 : 2)

              return (
                <View style={styles.tableContainer} key={idx}>
                  <Text style={styles.tableHeading}>
                    {heading}
                  </Text>
                  {rows.length > 0 &&
                    <Table borderStyle={{ borderWidth: 1, borderColor: '#DDD' }}>
                      <Row
                        data={Object.keys(rows[0])}
                        style={styles.tableHead}
                        textStyle={styles.tableHeadText}
                        flexArr={flexArr}
                      />
                      <Rows
                        data={rows.map(row => (
                          Object.values(row).map((val, idx) => (
                            flexArr[idx] === 1
                              ? <Text style={styles.tableCellNumber}>{val}</Text>
                              : val
                          ))
                        ))}
                        textStyle={styles.tableText}
                        flexArr={flexArr}
                      />
                    </Table>
                  }
                  <Text style={styles.tableSummary}>
                    {summary}
                  </Text>
                </View>
              )
            })}
          </ScrollView>
        </View>
      }
      {loading &&
        <CoverAndSpin
          style={{ backgroundColor: 'white' }}
        />
      }

    </SafeLayout>
  )
}

const mapStateToProps = ({ idps, accounts }) => ({
  idps,
  accounts,
})

const matchDispatchToProps = (dispatch, x) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(Reports)
