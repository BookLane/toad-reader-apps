#!/bin/bash

echo ""

TENANT_ITEMS=("app.json" "assets")
THIS_SCRIPT=$0
TENANT_TO_SWITCH_TO=$1

if [ ! -d "tenants/$TENANT_TO_SWITCH_TO" ]; then
  echo "This tenant does not exist."
  echo "If you would like to create this tenant from a copy of an existing tenant, enter the existing tenant and hit ENTER. Otherwise, just hit ENTER."

  read CREATE_FROM_THIS_TENANT

  if [ "$CREATE_FROM_THIS_TENANT" = "" ]; then
    # they chose not to create the tenant
    echo ""

  elif [ -d "tenants/$CREATE_FROM_THIS_TENANT" ]; then
    mkdir "tenants/$TENANT_TO_SWITCH_TO" || exit 1;
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      cp -R "tenants/$CREATE_FROM_THIS_TENANT/$TENANT_ITEM" "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" || exit 1;
    done

    echo "The tenant $TENANT_TO_SWITCH_TO has been created."

    eval "$THIS_SCRIPT $TENANT_TO_SWITCH_TO"

  else 
    echo "Invalid existing tenant."
  fi

elif [ ! "$(ls -A tenants/$TENANT_TO_SWITCH_TO)" ]; then
  echo "This tenant appears to already be selected."

else

  for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
    if [ ! -d "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ] && [ ! -f "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ]; then
      INVALID_TENANT_DIR_CONTENTS=1
    fi
  done
  
  if [ $INVALID_TENANT_DIR_CONTENTS ]; then
    echo "The directory for this tenant does not have the required contents."

  else

    ##### everything checks out, now we make the switch #####

    # delete current tenant items
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      rm -R ./$TENANT_ITEM || exit 1;
    done

    # copy tenant items to the base dir
    for TENANT_ITEM in "${TENANT_ITEMS[@]}" ; do
      cp -R "tenants/$TENANT_TO_SWITCH_TO/$TENANT_ITEM" ./$TENANT_ITEM || exit 1;
    done

    echo "Changed tenant to $TENANT_TO_SWITCH_TO."
  fi
fi

echo ""